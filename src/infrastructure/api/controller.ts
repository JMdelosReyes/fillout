import { ResponsesFetcher } from '@app/application/responses-fetcher';
import { isSchemaValid } from '@app/utils/schema-validator';
import { NextFunction, Request, Response } from 'express';
import { GenericError } from '@app/core/generic-error';
import { StatusCodes } from 'http-status-codes';
import Joi from 'joi';

export class Controller {
  constructor(private responsesFetcher: ResponsesFetcher) { }

  getAnswers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      this.isQueryValid(req.query);
      const { formId } = req.params;
      const responses = await this.responsesFetcher.fetchResponses(formId, req.query);
      res.json(responses);
    } catch (error) {
      next(error);
    }
  };

  isQueryValid = (query: Record<string, unknown>) => {
    try {
      query.filters = query?.filters ? JSON.parse(query.filters as string) : undefined;
    } catch {
      // Do nothing
    }

    const schema = Joi.object({
      limit: Joi.number().integer().min(1).max(150),
      afterDate: Joi.date().iso(),
      beforeDate: Joi.date().iso(),
      offset: Joi.number().integer().min(0),
      status: Joi.string().valid('in_progress', 'finished'),
      includeEditLink: Joi.boolean(),
      sort: Joi.string().valid('asc', 'desc'),
      filters: Joi.array().items(
        Joi.object({
          id: Joi.string().required(),
          condition: Joi.string().valid('equals', 'does_not_equal', 'greater_than', 'less_than').required(),
          value: Joi.alternatives(Joi.number(), Joi.string()).required(),
        })
      ),
    });

    const { isValid, error } = isSchemaValid(schema, query);

    if (!isValid) {
      throw new GenericError(StatusCodes.BAD_REQUEST, error);
    }
  };
}