import { Task } from "../../../types"
import {v4 as uuidv4} from 'uuid';

export const Form = ({setTask}:{setTask: (todo: Task) => void}) : JSX.Element => {
  const handleSubmitTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const date = formData.get("date") as string;
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    setTask({
          id: uuidv4(),
          title,
          description,
          status: "Pending",
          date,
        },)
  }
  return (
    <form className="max-w-sm mx-auto my-6" onSubmit={handleSubmitTodo} id="form">
    <div className="mb-5">
        <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
        <input type="date" id="date" name="date" className="bg-[#1d1c1c] text-white placeholder-gray-500 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"required />
    </div>
    <div className="mb-5">
        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">To Do Title</label>
        <input type="text" id="title" name="title" className="bg-[#1d1c1c] border border-gray-300 text-white placeholder-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Go to the gym" required />
    </div>
    <div className="mb-5">
        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">To Do Description</label>
        <textarea name="description" id="description" className="bg-[#1d1c1c] border border-gray-300 text-white placeholder-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="I need to go to the gym 4 times this week." required />
    </div>
    <button type="submit" className="bg-[#b7f36a] font-bold text hover:bg-[#99e545] focus:ring-4 focus:outline-none focus:ring-green-600 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Add To Do</button>
    </form>
  )
}