import "reflect-metadata"
//import { MikroORM } from '@mikro-orm/core'
import { COOKIE_NAME, __prod__ } from './constants'
//import microConfig from './mikro-orm.config'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { HelloResolver } from './resolvers/hello'
import { PostResolver } from './resolvers/post';
import { UserResolver } from "./resolvers/user"
import Redis from 'ioredis'
import session from 'express-session'
import connectRedis from 'connect-redis'
import cors from 'cors'
import path from 'path'
import { createConnection } from 'typeorm'
import { User } from "./entities/User"
import { Post } from "./entities/Post"
import { Updoot } from "./entities/Updoot"

const main = async () => {
    const conn = await createConnection({
        type: 'postgres',
        database: 'lireddit2',
        username: 'postgres',
        password: 'postgres',
        logging: true,
        synchronize: true,
        migrations: [path.join(__dirname, "./migrations/*")],
        entities: [Post, User, Updoot]
    })
    await conn.runMigrations()

    
    //await Post.delete({})
    // const orm = await MikroORM.init(microConfig)
    // //await orm.em.nativeDelete(User, {})
    // console.log('run migrations')
    // await orm.getMigrator().up()

    const app = express()

    const RedisStore = connectRedis(session)
    const redis = new Redis()
    console.log('__prod__:', !__prod__)
    /// define use of cors
    app.use(cors({
        origin: "http://localhost:3000",
        credentials: true
    }))
    /// first initialize redis to use it in apollo server
    app.use(
        session({
            name: COOKIE_NAME,
            store: new RedisStore({
                client: redis,
                disableTouch: true,
            }),
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 365 * 10, /// 10 years
                httpOnly: true,
                sameSite: "lax", //csrf
                secure: __prod__/// cookie only works in https, When truthy, the Secure attribute is set, otherwise it is not
            },
            saveUninitialized: false,
            secret: "secret redis",
            resave: true
        })
    )

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver, PostResolver, UserResolver],
            validate: false,
        }),
        context: ({ req, res }) => ({ req, res, redis })
    })

    apolloServer.applyMiddleware({
        app,
        cors: false
    })

    app.listen(4000, () => {
        console.log('express server at: localhost:4000')
    })
}

main().catch(err => console.log('error main: ', err))