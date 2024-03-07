import { NextFunction, Request, Response } from 'express';
import { GenericError } from '@app/core/generic-error';
import { StatusCodes } from 'http-status-codes';

const ALLOWED_METHODS = ['GET'];

export const allowedMethodsHandler = (req: Request, res: Response, next: NextFunction) => {
  if (ALLOWED_METHODS.includes(req.method)) {
    next();
    return;
  }

  const error = new GenericError(StatusCodes.METHOD_NOT_ALLOWED, `Method not allowed - ${req.method}`);
  next(error);
};