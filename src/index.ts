import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import { sequelize } from './config/database';

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
