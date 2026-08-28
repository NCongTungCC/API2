import { RequestHandler } from 'express';
import { logger as accessLogger } from '../config/logger.js';

export const requestLogger: RequestHandler = (request, response, next) => {
  accessLogger.info('Request:', {
    body: request.body,
    headers: request.headers,
    method: request.method,
    originalUrl: request.originalUrl,
    params: request.params,
    query: request.query,
  });

  let body: unknown;
  const originalJson = response.json.bind(response);

  response.json = (payload: unknown) => {
    body = payload;

    return originalJson(payload);
  };

  response.on('finish', () => {
    accessLogger.info('Response:', {
      body,
      status: response.statusCode,
    });
  });

  next();
};
