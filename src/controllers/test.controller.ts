import { Request, Response } from 'express';
import Event from '../models/event.model';

export const startTest = async (req: Request, res: Response) => {
  const { email } = req.body;

  await Event.create({
    email,
    event: 'Test Started',
  });

  res.status(200).json({ message: 'Test Started Logged' });
};
