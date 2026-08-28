import { ErrorRequestHandler } from 'express';
import { logger } from '../config/logger.js';
import { HttpError, InternalServiceError, ValidationError } from '../errors/index.js';
import { responseHelper } from '../helpers/response.helper.js';

const describe = (error: unknown): string =>
  error instanceof Error ? (error.stack ?? error.message) : String(error);

export const errorHandler: ErrorRequestHandler = (error, _request, response, next) => {
  if (!(error instanceof ValidationError)) {
    logger.error(`Error: ${describe(error)}`);
  }

  if (response.headersSent) {
    next(error);
    return;
  }

  if (error instanceof HttpError) {
    responseHelper.error(response, error);
    return;
  }

  responseHelper.error(response, new InternalServiceError(describe(error)));
};
