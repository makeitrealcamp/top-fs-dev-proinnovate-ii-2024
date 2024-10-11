import { Request, Response } from 'express';
import * as projectRepository from './infrastructure';
import * as projectService from './application';

const repository = projectRepository.projectPrismaRepository;

export const getAllProjects = async (req: Request, res: Response) => {
  try {
    const projects = await projectService.getProjects(repository);
    res.json(projects);
  } catch (error) {
    throw new Error(`Unable to fetch projects: ${error}`);
  }
};

export const getProjectById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const project = await projectService.getProjectById(id, repository);

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.json(project);
  } catch (error) {
    throw new Error(`Unable to fetch project: ${error}`);
  }
};

export const getProjectsByUserId = async (req: Request, res: Response) => {
  const { userId } = req.query as { userId: string };

  if (!userId) {
    return res.status(400).json({ error: 'User id is required' });
  }

  try {
    const projects = await projectService.getProjectsByUserId(
      userId,
      repository,
    );
    res.json(projects);
  } catch (error) {
    throw new Error(`Unable to fetch projects: ${error}`);
  }
};
