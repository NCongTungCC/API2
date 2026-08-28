import { HttpStatus } from '../utils/httpStatus.js';
import { HttpError, HttpErrorOption } from './http.error.js';

export class ConflictError extends HttpError {
  constructor(internalMessage = 'Resource already exists', option: HttpErrorOption = {}) {
    super(internalMessage, HttpStatus.CONFLICT, option);
  }
}
