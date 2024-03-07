import { HttpClientSuperagent } from '@app/core/http/http-client-superagent';
import { HttpFormService } from '@app/infrastructure/http-form-service';
import { ResponsesFetcher } from '@app/application/responses-fetcher';
import { Controller } from '@app/infrastructure/api/controller';

const httpClient = new HttpClientSuperagent();
const formService = new HttpFormService(httpClient);
const responsesFetcher = new ResponsesFetcher(formService);
const controller = new Controller(responsesFetcher);

export { controller };