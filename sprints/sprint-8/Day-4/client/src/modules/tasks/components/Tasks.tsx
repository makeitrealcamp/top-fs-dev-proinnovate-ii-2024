import { Task } from "../../../types"
import { Card } from "./Card"

export const Tasks = ({tasks, deleteTask, updateTask}:{tasks: Task[], deleteTask: (id: Task["id"]) => void, updateTask: (task: Task) => void}) : JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center my-6">
        <div className="flex flex-wrap gap-3 ml-4">
            {
                tasks?.map((item) => (
                    <Card 
                    key={item.id} 
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    status={item.status}
                    date={item.date}
                    deleteTask={deleteTask}
                    updateTask={updateTask}
                    />
                ))
            }
        </div>
    </div>
  )
}