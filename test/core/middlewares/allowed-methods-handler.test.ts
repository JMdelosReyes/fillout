import { allowedMethodsHandler } from '@app/core/middlewares/allowed-methods-handler';
import { Request, Response, NextFunction } from 'express';
import { GenericError } from '@app/core/generic-error';
import { StatusCodes } from 'http-status-codes';

describe('allowedMethodsHandler', () => {
  let req: Request;
  let res: Response;
  let next: NextFunction;

  beforeEach(() => {
    req = {} as Request;
    res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    } as unknown as Response;
    next = jest.fn();
  });

  it('should call next() if the request method is allowed', () => {
    req.method = 'GET';
    allowedMethodsHandler(req, res, next);
    expect(next).toHaveBeenCalled();
  });

  it('should return 405 status code if the request method is not allowed', () => {
    req.method = 'POST';
    allowedMethodsHandler(req, res, next);
    expect(next).toHaveBeenCalledWith(new GenericError(StatusCodes.METHOD_NOT_ALLOWED, `Method not allowed - ${req.method}`));
  });
});
