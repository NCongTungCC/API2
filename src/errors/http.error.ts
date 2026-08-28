import { HttpStatusCode } from '../utils/httpStatus.js';

export interface HttpErrorOption {
  title?: string;
  message?: string;
  status?: HttpStatusCode;
  errors?: readonly HttpError[];
}

export interface HttpErrorOutput {
  status: HttpStatusCode;
  title?: string;
  message?: string;
  errors: readonly HttpError[];
}

export class HttpError extends Error {
  public readonly status: HttpStatusCode;
  public readonly output: HttpErrorOutput;

  constructor(internalMessage: string, defaultStatus: HttpStatusCode, option: HttpErrorOption) {
    super(internalMessage);

    this.name = new.target.name;
    Error.captureStackTrace(this, new.target);

    const status = option.status ?? defaultStatus;

    this.status = status;
    this.output = {
      status,
      title: option.title,
      message: option.message,
      errors: option.errors ?? [],
    };
  }
}
