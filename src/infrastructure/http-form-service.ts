
import { HttpClient } from '@app/core/http/http-client';
import { ResponsesWrapper } from '@app/domain/response';
import { FormService } from '@app/domain/form-service';
import environment from '@env';

const BASE_URL = 'https://api.fillout.com/v1/api/forms';
const { API_KEY } = environment;

export class HttpFormService implements FormService {
  constructor(private httpClient: HttpClient) { }

  async getResponses(formId: string, query: Record<string, unknown>): Promise<ResponsesWrapper> {
    let url = `${BASE_URL}/${formId}/submissions`;

    if (query) {
      const queryString = new URLSearchParams(query as Record<string, string>).toString();
      url = `${url}?${queryString}`;
    }

    return await this.httpClient.get(url, { headers: { 'Authorization': `Bearer ${API_KEY}` } });
  }
}