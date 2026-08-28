import { HttpStatus } from '../utils/httpStatus.js';
import { HttpError, HttpErrorOption } from './http.error.js';

export class UnauthorizedError extends HttpError {
  constructor(internalMessage = 'Authentication required', option: HttpErrorOption = {}) {
    super(internalMessage, HttpStatus.UNAUTHORIZED, option);
  }
}
