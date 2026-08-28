import { HttpStatus } from '../utils/httpStatus.js';
import { HttpError, HttpErrorOption } from './http.error.js';

export class InternalServiceError extends HttpError {
  constructor(internalMessage = 'Internal server error', option: HttpErrorOption = {}) {
    super(internalMessage, HttpStatus.INTERNAL_SERVER_ERROR, option);
  }
}
