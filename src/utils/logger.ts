import winston from 'winston';

export class Logger {
  private static instance: winston.Logger;

  private static getInstance(): winston.Logger {
    if (!Logger.instance) {
      Logger.instance = winston.createLogger({
        level: 'info',
        format: winston.format.json(),
        transports: [
          new winston.transports.Console(),
          new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
          new winston.transports.File({ filename: 'logs/combined.log' })
        ]
      });
    }

    return Logger.instance;
  }

  static info(message: string) {
    Logger.getInstance().info(message);
  }

  static error(message: string) {
    Logger.getInstance().error(message);
  }

  static warn(message: string) {
    Logger.getInstance().warn(message);
  }

  static debug(message: string) {
    Logger.getInstance().debug(message);
  }
}