import { HttpStatus } from '../utils/httpStatus.js';
import { HttpError, HttpErrorOption } from './http.error.js';

export class NotFoundError extends HttpError {
  constructor(internalMessage = 'Resource not found', option: HttpErrorOption = {}) {
    super(internalMessage, HttpStatus.NOT_FOUND, option);
  }
}
