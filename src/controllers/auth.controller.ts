import { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/auth.service';

export const signup = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  const result = await registerUser(email, password);

  if (!result.success) {
    res.status(400).json({ message: 'User already registered' });
  } else {
    res.status(201).json({ message: 'Signup successful! Please login.' });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  const result = await loginUser(email, password);

  if (!result.success) {
    res.status(401).json({ message: 'Invalid credentials. Please try again.' });
  } else {
    res.status(200).json({ message: 'Login successful', user: result.user });
  }
};
