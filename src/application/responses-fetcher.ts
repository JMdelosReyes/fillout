import { ResponsesWrapper } from '@app/domain/response';
import { FormService } from '@app/domain/form-service';
import { Filter } from '@app/domain/filter';

export class ResponsesFetcher {
  constructor(private formService: FormService) { }

  async fetchResponses(formId: string, query: Record<string, unknown>) {
    const { filters, limit, offset, ...normalQuery } = query;
    const responsesWrapper = await this.formService.getResponses(formId, normalQuery);

    if (filters) {
      this.applyFilters(responsesWrapper, filters as Array<Filter>);
    }

    this.applyPagination(responsesWrapper, limit as number ?? 150, offset as number ?? 0);

    return responsesWrapper;
  }

  applyFilters(responsesWrapper: ResponsesWrapper, filters: Array<Filter>) {
    responsesWrapper.responses = responsesWrapper.responses.filter((iResponse) => {
      const { questions } = iResponse;

      return filters.every((filter) => {
        const responseValue = questions?.find((answer) => answer.id === filter.id)?.value;
        if (responseValue === undefined) {
          return false;
        }

        switch (filter.condition) {
          case 'equals':
            return responseValue === filter.value;
          case 'does_not_equal':
            return responseValue !== filter.value;
          case 'greater_than':
            return responseValue !== null && responseValue > filter.value;
          case 'less_than':
            return responseValue !== null && responseValue < filter.value;
          default:
            return false;
        }
      });
    });
  }

  applyPagination(responsesWrapper: ResponsesWrapper, limit: number, offset: number) {
    responsesWrapper.totalResponses = responsesWrapper.responses.length;
    responsesWrapper.pageCount = Math.ceil(responsesWrapper.totalResponses / limit);
    responsesWrapper.responses = responsesWrapper.responses.slice(offset, offset + limit);
  }
}