import { Router } from 'express';
import { responseHelper } from '../helpers/index.js';

const healthRouter = Router();

healthRouter.get('/', (_request, response) => {
  responseHelper.ok(response, {
    status: 'ok',
    timestamp: new Date().toISOString(),
  });
});

export default healthRouter;
