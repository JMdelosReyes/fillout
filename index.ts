
import environment from '@env';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import { allowedMethodsHandler } from '@app/core/middlewares/allowed-methods-handler';
import { notFoundHandler } from '@app/core/middlewares/not-found-handler';
import { errorHandler } from '@app/core/middlewares/error-handler';
import { Logger } from '@app/utils/logger';

const app = express();
app.use(morgan('common'));
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: '*' }));

app.use(allowedMethodsHandler);
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(environment.PORT, () => {
  Logger.info(`Listening on port ${environment.PORT}`);
}).on('error', (error) => {
  Logger.error(`Error: ${error.message}`);
  process.exit(1);
});
