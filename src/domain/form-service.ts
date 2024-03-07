import { ResponsesWrapper } from '@app/domain/response';

export interface FormService {
  getResponses(formId: string, query: Record<string, unknown>): Promise<ResponsesWrapper>;
}