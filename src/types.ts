import { Request, Response } from 'express'
import { Session } from "express-session"
import { Redis } from "ioredis"
import { createUserLoader } from './utils/createUserLoader';
import { createUpdootLoader } from './utils/createUpdootLoader';
//// req: Request & { session: Express.Session } isn't working for me, instead I use:
export type MyContext = {
    req: Request & { session: Session & { userId?: number } }
    redis: Redis
    res: Response
    userLoader: ReturnType<typeof createUserLoader>
    updootLoader: ReturnType<typeof createUpdootLoader>
}