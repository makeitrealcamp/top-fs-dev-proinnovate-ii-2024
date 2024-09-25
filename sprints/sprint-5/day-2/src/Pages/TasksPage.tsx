import { TaskForm } from '../components/Tasks/TaskForm';
import { TaskList } from '../components/Tasks/TaskList';

import { TasksContextProvider } from '../context/taskContext/TasksContextProvider';

import { TotalTasks } from './TotalTasks';

import { useTasks } from '../hooks/useTasks';

export const TasksPage = () => {
  const { data, error, isLoading } = useTasks();
  // const queryClient = useQueryClient();
  // const { data, error, isLoading } = useQuery({
  //   queryFn: () => taskService.getTasks(),
  //   queryKey: ['tasks'],
  // });

  // const { mutateAsync: addTaskMutation } = useMutation({
  //   mutationFn: () =>
  //     taskService.createTask({
  //       id: 35,
  //       title: 'Task 35',
  //       description: 'Task 35 description',
  //       status: 'not started',
  //       createdAt: new Date().toISOString(),
  //       updatedAt: new Date().toISOString(),
  //       userId: 1,
  //     }),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(['tasks']);
  //   },
  // });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl text-center font-semibold text-gray-900 ">
        Tasks
      </h1>
      <TasksContextProvider>
        <h2>TasksPage</h2>
        <TotalTasks />
        <TaskForm />
        <TaskList tasks={data?.data} />
      </TasksContextProvider>
    </div>
  );
};
