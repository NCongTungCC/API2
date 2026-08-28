import { Router } from 'express';
import { currentTimeController } from '../controllers/currentTimeController.js';

const currentTimeRouter = Router();

currentTimeRouter.get('/', currentTimeController.getCurrentTime);

export default currentTimeRouter;
