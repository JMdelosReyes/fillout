import { controller } from '@app/infrastructure/dependencies';
import { Router } from 'express';

const router = Router();

router.get('/:formId/filteredResponses', controller.getAnswers);

export default router;