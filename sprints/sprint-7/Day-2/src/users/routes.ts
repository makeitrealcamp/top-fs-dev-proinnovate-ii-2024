import { Router } from 'express';
import * as User from './controller';
import { paramValidation } from '../shared/middlewares/paramValidation';

const router = Router();

router.get('/users', User.getAllUsers);
router.get('/users/:id', paramValidation, User.getUserById);
router.post('/users', User.createUser);
router.delete('/users/:id', paramValidation, User.deleteUser);
router.put('/users/:id', paramValidation, User.updateUser);

export default router;
