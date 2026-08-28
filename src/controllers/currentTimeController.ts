import { NextFunction, Request, Response } from 'express';
import { CurrentTimeService, currentTimeService } from '../services/currentTimeService.js';
import { responseHelper } from '../helpers/index.js';

export class CurrentTimeController {
  constructor(private readonly service: CurrentTimeService = currentTimeService) {}

  public getCurrentTime = (_request: Request, response: Response, next: NextFunction): void => {
    try {
      const currentTime = this.service.getCurrentTime();

      return responseHelper.ok(response, currentTime);
    } catch (error: unknown) {
      next(error);
    }
  };
}

export const currentTimeController = new CurrentTimeController();
