import { HttpClient, HttpOptions } from '@app/core/http/http-client';
import superagent from 'superagent';

export class HttpClientSuperagent implements HttpClient {
  private static defaultHeaders = { 'Content-Type': 'application/json' };

  getHeaders = (headers?: Record<string, string>): Record<string, string> => ({ ...HttpClientSuperagent.defaultHeaders, ...(headers ?? {}) });

  get = async <T>(url: string, options: HttpOptions = {}) => {
    const { body: result } = await superagent.get(`${url}`).set(this.getHeaders(options.headers)).send();
    return <T>result;
  };

  post = async <T>(url: string, body: T, options: HttpOptions = {}) => {
    const { body: result } = await superagent.post(`${url}`)
      .set(this.getHeaders(options.headers))
      .send(JSON.stringify(body));

    return <T>result;
  };

  put = async <T>(url: string, body: T, options: HttpOptions = {}) => {
    const { body: result } = await superagent.put(`${url}`)
      .set(this.getHeaders(options.headers))
      .send(JSON.stringify(body));

    return <T>result;
  };

  delete = async <T>(url: string, body: T, options: HttpOptions = {}) => {
    await superagent.delete(`${url}`)
      .set(this.getHeaders(options.headers))
      .send(JSON.stringify(body));
  };
}