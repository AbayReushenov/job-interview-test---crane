import { RequestHandler } from 'express';
import { Crane } from '../../../models/Crane';

export const getCrane: RequestHandler = async (req, res, next) => {
  await Crane.find()
    .sort({ date: -1 })
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json({ msg: err.message }));
};
