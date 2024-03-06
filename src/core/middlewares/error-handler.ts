import { GenericError } from '@app/core/generic-error';
import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';

export const errorHandler = (error: Error | GenericError, req: Request, res: Response) => {
  const statusCode = error instanceof GenericError && error.statusCode ? error.statusCode : StatusCodes.INTERNAL_SERVER_ERROR;
  res.status(statusCode).json(error.message);
};