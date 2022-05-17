import { Router } from 'express';
import { routerCrane } from './crane';

export const apiRouter = Router()

apiRouter.use("/crane", routerCrane)
