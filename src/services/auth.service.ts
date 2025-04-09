import User from '../models/user.model';

export const registerUser = async (email: string, password: string) => {
  const existing = await User.findOne({ where: { email } });
  if (existing) return { success: false, message: 'User already registered' };

  const user = await User.create({ email, password });
  return { success: true, user };
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ where: { email, password } });
  if (!user) return { success: false, message: 'Invalid credentials' };

  return { success: true, user };
};
