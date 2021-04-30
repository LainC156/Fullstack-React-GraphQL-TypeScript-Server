import { User } from '../entities/User';
import { MyContext } from '../types'
import { Arg, Ctx, Field, Mutation, Resolver, ObjectType, Query } from 'type-graphql';
import argon2 from 'argon2'
import { COOKIE_NAME, FORGET_PASSWORD_PREFIX } from '../constants';
import { UsernamePasswordInput } from './UsernamePasswordInput';
import { validateRegister } from '../utils/validateRegister';
import { sendEmail } from '../utils/sendEmail';
import { v4 } from 'uuid';
import { getConnection } from 'typeorm';

@ObjectType()
class FieldError {
    @Field()
    field: string
    @Field()
    message: string
}
 
@ObjectType()
class UserResponse {
    @Field(() => [FieldError], { nullable: true })
    errors?: FieldError[]

    @Field(() => User, { nullable: true })
    user?: User
}

@Resolver()
export class UserResolver {

    @Mutation(() => UserResponse)
    async changePassword(
        @Arg('token') token: string,
        @Arg('newPassword') newPassword: string,
        @Ctx() ctx: MyContext
    ): Promise<UserResponse> {
        //password validation
        if (newPassword.length < 2) {
            return {
                errors: [
                    {
                        field: "newPassword",
                        message: "length must be greater than 2"
                    }
                ]
            }
        }
        const key = FORGET_PASSWORD_PREFIX + token
        const userId = await ctx.redis.get(key)
        if (!userId) {
            return {
                errors: [
                    {
                        field: "token",
                        message: "token expired"
                    }
                ]
            }
        }
        const userIdNum = parseInt(userId)
        const user = await User.findOne(userIdNum)
        if (!user) {
            return {
                errors: [
                    {
                        field: "token",
                        message: "user no longer exists"
                    }
                ]
            }
        }

        await User.update({ id: userIdNum }, {
            password: await argon2.hash(newPassword)
        })
        await ctx.redis.del(key)
        ctx.req.session.userId = user.id
        return { user }
    }

    @Mutation(() => Boolean)
    async forgotPassword(
        @Arg('email') email: string,
        @Ctx() ctx: MyContext
    ) {
        const user = await User.findOne({ where: { email } })
        if (!user) {
            return true
        }
        const token = v4()

        await ctx.redis.set(FORGET_PASSWORD_PREFIX + token, user.id, 'ex', 1000 * 60 * 60 * 24 * 3)
        console.log('enviando email forgot-password')
        await sendEmail(email,
            `<a href="http://localhost:3000/change-password/${token}">reset password</a>`
        )
        return true
    }

    @Query(() => User, { nullable: true })
    me(
        @Ctx() ctx: MyContext
    ) {
        //you are not logged in
        if (!ctx.req.session.userId) {
            return null
        }

        return User.findOne(ctx.req.session.userId)
    }

    @Mutation(() => UserResponse)
    async register(
        @Arg('options') options: UsernamePasswordInput,
        @Ctx() ctx: MyContext
    ): Promise<UserResponse> {
        const errors = validateRegister(options)
        if (errors) {
            return { errors }
        }
        const hashedPassword = await argon2.hash(options.password)
        let user
        try {
            const result = await getConnection().createQueryBuilder().insert().into(User).values({
                username: options.username,
                password: hashedPassword,
                email: options.email,
            })
                .returning('*')
                .execute()
            user = result.raw[0]
        } catch (err) {
            //duplicate user err //|| err.detail.includes("already exists"))
            if (err.code === '23505') {
                return {
                    errors: [{
                        field: 'username',
                        message: 'username already exists'
                    }]
                }
            }
            // duplicate email err

            console.log('register err: ', err.message)
        }
        //store user id session
        //this set a cookie on the user
        //keep them logged in
        ctx.req.session.userId = user.id

        return { user }
    }
    @Mutation(() => UserResponse)
    async login(
        @Arg('usernameOrEmail') usernameOrEmail: string,
        @Arg("password") password: string,
        @Ctx() ctx: MyContext
    ): Promise<UserResponse> {
        const user = await User.findOne(
            usernameOrEmail.includes('@')
                ? { where: { email: usernameOrEmail } }
                : { where: { username: usernameOrEmail } }
        )
        if (!user) {
            return {
                errors: [{
                    field: 'usernameOrEmail',
                    message: 'username not found'
                }]
            }
        }
        const valid = await argon2.verify(user.password, password)
        if (!valid) {
            return {
                errors: [{
                    field: 'password',
                    message: 'password is incorrect'
                }]
            }
        }

        ctx.req.session.userId = user.id

        return {
            user
        }
    }

    @Mutation(() => Boolean)
    logout(
        @Ctx() ctx: MyContext
    ) {
        return new Promise((res) =>
            ctx.req.session.destroy(
                (err) => {
                    ctx.res.clearCookie(COOKIE_NAME)
                    if (err) {
                        res(false)
                        return
                    }
                    res(true)
                })
        )
    }
}