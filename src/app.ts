import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/auth.routes';
import testRoutes from './routes/test.routes'; 
const app = express();

app.use(bodyParser.json()); 

app.use('/api', router);
app.use('/api', router); 

export default app;
