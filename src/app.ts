import express from 'express';
import helmet from 'helmet';
import { NotFoundError } from './errors/index.js';
import { responseHelper } from './helpers/index.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { requestContext } from './middlewares/requestContext.js';
import { requestLogger } from './middlewares/requestLogger.js';
import apiRouter from './routes/index.js';
import './models/index.js';

export const app = express();

// Đứng đầu: mở AsyncLocalStorage context, mọi log phía sau mới có requestId.
app.use(requestContext);

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sau body parser, nếu không `request.body` vẫn còn rỗng khi ghi log.
app.use(requestLogger);

app.get('/', (_request, response) => {
  responseHelper.ok(response, { message: 'TypeScript Express API' });
});

app.use(apiRouter);

app.use((request, _response, next) => {
  next(new NotFoundError(`Route ${request.method} ${request.originalUrl} not found`));
});

app.use(errorHandler);
