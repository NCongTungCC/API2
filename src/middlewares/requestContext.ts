import { RequestHandler } from 'express';
import { generateRequestId, localStorageHelper } from '../helpers/index.js';

export const REQUEST_ID_HEADER = 'x-request-id';

export const requestContext: RequestHandler = (request, response, next) => {
  const incoming = request.get(REQUEST_ID_HEADER)?.trim();
  const requestId = incoming || generateRequestId();

  response.setHeader(REQUEST_ID_HEADER, requestId);

  localStorageHelper.run({ requestId }, next);
};
