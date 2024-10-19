import { Router } from 'express';
import { getAllProjects, getProjectById, createProject } from './controller';
import { asyncHandler } from '../../utils/asyncHandler';
import { paramValidation } from '../../shared/middlewares/paramValidation';
import { isAuthenticated } from '../../shared/middlewares/isAuthenticated';

const router = Router();

router.get('/projects', asyncHandler(getAllProjects));

router.get('/projects/:id', paramValidation, asyncHandler(getProjectById));

router.post('/projects', isAuthenticated, asyncHandler(createProject));

export default router;
