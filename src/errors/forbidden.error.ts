import { HttpStatus } from '../utils/httpStatus.js';
import { HttpError, HttpErrorOption } from './http.error.js';

export class ForbiddenError extends HttpError {
  constructor(internalMessage = 'Access denied', option: HttpErrorOption = {}) {
    super(internalMessage, HttpStatus.FORBIDDEN, option);
  }
}
