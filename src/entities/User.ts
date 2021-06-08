import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Post } from "./Post";
import { Updoot } from "./Updoot";
@ObjectType()
@Entity()
export class User extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id!: number

    @Field()
    @Column({ unique: true })
    username!: string

    @Field()
    @Column({ unique: true })
    email!: string

    /// @Field() show field in querys, if @Field is not set, then field will not show itself in queries 
    @Column()
    password!: string

    //relation with Post
    @OneToMany(() => Post, post => post.creator)
    posts: Post[]

    @OneToMany(() => Updoot, updoot => updoot.user)
    updoots: Updoot[]

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt: Date

}