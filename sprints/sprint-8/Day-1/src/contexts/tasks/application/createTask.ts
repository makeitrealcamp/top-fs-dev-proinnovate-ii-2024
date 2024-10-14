import { ValidationError } from '../../../shared/errors/ValidationError';
import { ProjectRepository } from '../../projects';
import { Task } from '../domain/task.entity';
import { TaskRepository } from '../domain/task.repository';

export async function createTaskUseCase(
  input: Omit<Task, 'id'>,
  projectRepo: ProjectRepository,
  taskRepo: TaskRepository,
): Promise<Task | null> {
  const { name, description, projectId } = input;

  const projectExists = await projectRepo.getProjectById(projectId);
  if (!projectExists) {
    throw new ValidationError(`Project with ID ${projectId} not found.`);
  }

  return await taskRepo.createTask({ name, description, projectId });
}
