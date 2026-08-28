import { HttpStatus } from '../utils/httpStatus.js';
import { HttpError, HttpErrorOption } from './http.error.js';

export class ValidationError extends HttpError {
  constructor(internalMessage = 'Validation failed', option: HttpErrorOption = {}) {
    super(internalMessage, HttpStatus.UNPROCESSABLE_ENTITY, option);
  }
}
