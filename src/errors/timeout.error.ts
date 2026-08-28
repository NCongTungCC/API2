import { HttpStatus } from '../utils/httpStatus.js';
import { HttpError, HttpErrorOption } from './http.error.js';

export class TimeoutError extends HttpError {
  constructor(internalMessage = 'Request timed out', option: HttpErrorOption = {}) {
    super(internalMessage, HttpStatus.GATEWAY_TIMEOUT, option);
  }
}
