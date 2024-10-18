import { Request, Response } from 'express';
import * as projectRepository from './infrastructure';
import * as projectService from './application';

const repository = projectRepository.projectPrismaRepository;

export const getAllProjects = async (req: Request, res: Response) => {
  const projects = await projectService.getProjects(repository);
  res.json(projects);
};

export const getProjectById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const project = await projectService.getProjectById(id, repository);

  res.json(project);
};

export const getProjectsByUserId = async (req: Request, res: Response) => {
  const { userId } = req.query as { userId: string };

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


export const createProject = async (req: Request, res: Response) => {
  const project = req.body;

  try {
 
    const buildProject={
      name:project.name,
      description:project.description,
      userId:project.userId
    }
    // const newProject = await projectService.createProject(buildProject, repository);
    // console.log({
    //   newProject
    // });
    res.json(project);
  } catch (error) {
    throw new Error(`Unable to create project: ${error}`);
  }
};