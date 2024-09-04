import { Router } from 'express';
import FilesController from '../controllers/FilesController';
import authenticateTOken from '../middleware/auth';

const filesRouter = Router();

/**
 * GET /files/:id/data is excluded from this middleware
 * It uses a different authentication approach since it
 * response unauthorized access differs from the rest of the
 * files routes
 */
filesRouter.use(authenticateToken);

filesRouter.post('/files', FilesController.postUpload);

filesRouter.get('/files/:id', FilesController.getShow);

filesRouter.get('/files', FilesController.getIndex);

filesRouter.put('/files/:id/publish', FilesController.putPublish);

filesRouter.put('/files/:id/unpublish', FilesController.putUnpublish);

filesRouter.get('/files/:id/data', FilesController.getFile);
export default filesRouter;

