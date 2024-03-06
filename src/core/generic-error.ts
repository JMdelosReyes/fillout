export class GenericError extends Error {
  constructor(public statusCode: number, public message: string) {
    super();
    this.name = 'GenericError';
    this.statusCode = statusCode;
    this.message = message;
  }
}