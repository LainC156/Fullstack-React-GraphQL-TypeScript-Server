import { Request, Response } from 'express'
import { Session } from "express-session"
import { Redis } from "ioredis"
//import { Redis } from 'ioredis'
//// req: Request & { session: Express.Session } isn't working for me, instead I use:
export type MyContext = {
    req: Request & { session: Session & { userId?: number } }
    redis: Redis
    res: Response
}