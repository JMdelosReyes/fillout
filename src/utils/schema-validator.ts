import { ObjectSchema } from 'joi';

export const isSchemaValid = (schema: ObjectSchema, data: Record<string, unknown>): { isValid: boolean, error: string } => {
  const { error } = schema.validate(data);
  if (error) {
    return { isValid: false, error: error.details.map((detail) => detail.message).join(', ')};
  }

  return { isValid: true, error: '' };
};