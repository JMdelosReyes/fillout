export interface HttpOptions {
  headers?: Record<string, string>;
}

export interface HttpClient {
  get<T>(url: string, options?: HttpOptions): Promise<T>;

  post<T>(url: string, body: T, options?: HttpOptions): Promise<T>;

  put<T>(url: string, body: T, options?: HttpOptions): Promise<T>;

  delete<T>(url: string, body: T, options?: HttpOptions): Promise<void>;
}