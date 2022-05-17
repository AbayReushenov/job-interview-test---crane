import { Router } from 'express';
import { craneRouter } from './craneRouter';

export const routerCrane= Router()

routerCrane.use("/", craneRouter)
