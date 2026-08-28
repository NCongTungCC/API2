import { Response } from 'express';
import { HttpError } from '../errors/index.js';
import { HttpStatus } from '../utils/httpStatus.js';

export interface ParsedError {
  title: string;
  message: string;
  errors: ParsedError[];
}

const parseError = (error: HttpError): ParsedError => ({
  title: error.output.title ?? '',
  message: error.output.message ?? '',
  errors: error.output.errors.map(parseError),
});

const ok = <T>(response: Response, data: T): void => {
  response.status(HttpStatus.OK).json({ data });
};

const created = <T>(response: Response, data: T): void => {
  response.status(HttpStatus.CREATED).json({ data });
};

const noContent = (response: Response): void => {
  response.status(HttpStatus.NO_CONTENT).send();
};

const error = (response: Response, httpError: HttpError): void => {
  response.status(httpError.status).json({ error: parseError(httpError) });
};

export const responseHelper = {
  ok,
  created,
  noContent,
  error,
  parseError,
};
