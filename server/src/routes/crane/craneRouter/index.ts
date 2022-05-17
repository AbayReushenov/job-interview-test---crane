import { Router } from 'express';
import { getCrane } from '../../../controllers/cranes/getCrane';


export const craneRouter = Router()

/**
 * @route  GET api/crane
 * @desc   Get All Data
 * @access Public
 **/
 craneRouter.get("/", getCrane)
