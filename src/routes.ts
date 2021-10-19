import { Router } from 'express';
import { AuthenticateUserControler } from './controllers/AuthenticateUserController';

const router = Router();

router.post('/authenticate', new AuthenticateUserControler().handle);

export { router };