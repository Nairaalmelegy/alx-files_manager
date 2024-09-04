import { Router } from 'express';
import AppController from'../controllers/AppControllers';

const appRouter = Router();

/**
 * @api {get} / status GET database and redis client status
 * @apiName GetStauts
 * @apiGroup Statys
 * @apiDescription this end point returns the status of the mongodb
 */
appRouter.get('/status', AppController.getStatus);
appRouter.get('/stats', AppController.getStats);

export default appRouter;
