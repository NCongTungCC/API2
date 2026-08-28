import { HttpStatus } from '../utils/httpStatus.js';
import { HttpError, HttpErrorOption } from './http.error.js';

export class BadRequestError extends HttpError {
  constructor(internalMessage = 'Bad request', option: HttpErrorOption = {}) {
    super(internalMessage, HttpStatus.BAD_REQUEST, option);
  }
}
