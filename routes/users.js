import { Router } from 'express';
import AuthController from '../controllers/AuthController';
import UsersConroller from '../controllers/UsersController';
import authenticationToken from '../middleware/auth';

/**
 * @api {post} /users Create new user
 * @apiName PostUser
 * @apiGroup User
 * @apiDescription Create a new user profile from this endpoint.
 * @apiBody {String} email User's email
 * @apiBody {String} password User's password
 * @apiSuccessExample Success-Response:
 * @apiError MissingEmail User email is not provided
 * @apiError MissingPassword User password is not provide
 */

const usersRouter = Router();
usersRouteruse('/users/me', authenticateToken);
usersRouter.post('/users', UsersController.postNew);

usersRouter.get('/users/me', AuthController.getMe);
export default usersRouter;
