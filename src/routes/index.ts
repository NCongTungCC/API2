import { Router } from 'express';
import currentTimeRouter from './currentTime.js';
import healthRouter from './health.js';

const router = Router();

router.use('/health', healthRouter);
router.use('/v1/current-time', currentTimeRouter);

export default router;
