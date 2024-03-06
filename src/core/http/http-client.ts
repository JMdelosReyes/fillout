export interface HttpClient {
  get<T>(url: string): Promise<T>;

  post<T>(url: string, body: T): Promise<T>;

  put<T>(url: string, body: T): Promise<T>;

  delete<T>(url: string, body: T): Promise<void>;
}