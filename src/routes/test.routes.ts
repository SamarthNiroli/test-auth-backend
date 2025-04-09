import { Router } from 'express';
import { startTest } from '../controllers/test.controller';

const testRouter = Router();

testRouter.post('/start-test', startTest);

export default testRouter;
