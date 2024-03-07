import { NextFunction, Request, Response } from 'express';
import { GenericError } from '@app/core/generic-error';
import { StatusCodes } from 'http-status-codes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = (error: Error | GenericError, req: Request, res: Response, next: NextFunction) => {
  const statusCode = error instanceof GenericError && error.statusCode ? error.statusCode : StatusCodes.INTERNAL_SERVER_ERROR;
  res.status(statusCode).json(error.message);
};