mport { Router } from 'express';
import AuthController from '../controllers/AuthController';
import authenticationToken from '../middleware/auth';

const authRouter = Router();

authRouter.use('/disconnect', authenticationToken);
/**
 * @api {get} /connect User login
 * @apiName GetConnect
 * @apiGroup Authentication
 * @apiDescription Login in to the system through this endpoint.
 * Providing the right credential generates a user token that can
 * be used to access restricted endpoints. The token is valid for
 * 24 hours.
 * @apiBody {String} email User's email
 * @apiBody {String} password User's password
 */

authRouter.get('/connect', AuthController.getConnect);
authRouter.get('/disconnect', AuthController.getDisconnect);

export default authRouter;
