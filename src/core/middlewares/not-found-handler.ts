import { Request, Response, NextFunction } from 'express';
import { GenericError } from '@app/core/generic-error';
import { StatusCodes } from 'http-status-codes';

export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  const error = new GenericError(StatusCodes.NOT_FOUND, `Not Found - ${req.originalUrl}`);
  next(error);
};