import { Router } from 'express';
import { getAllProjects, getProjectById } from './controller';

const router = Router();

router.get('/projects', getAllProjects);
router.get('/projects/:id', getProjectById);

