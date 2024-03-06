import { HttpClient } from '@app/core/http/http-client';
import superagent from 'superagent';

export class HttpClientSuperagent implements HttpClient {
  get = async <T>(url: string) => {
    const { body: result } = await superagent.get(`${url}`);
    return <T>result;
  };

  post = async <T>(url: string, body: T) => {
    const { body: result } = await superagent.post(`${url}`)
      .set('Content-Type', 'application/json')
      .send(JSON.stringify(body));

    return <T>result;
  };

  put = async <T>(url: string, body: T) => {
    const { body: result } = await superagent.put(`${url}`)
      .set('Content-Type', 'application/json')
      .send(JSON.stringify(body));

    return <T>result;
  };

  delete = async <T>(url: string, body: T) => {
    await superagent.delete(`${url}`)
      .set('Content-Type', 'application/json')
      .send(JSON.stringify(body));
  };
}