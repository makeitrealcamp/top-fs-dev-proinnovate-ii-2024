import { useState } from "react";
import { Task } from "../../../types"

export const Card = ({id, title, description, status, date, deleteTask, updateTask}:{id: Task["id"], title: Task["title"], description: Task["description"], status: Task["status"], date: Task["date"], deleteTask: (id: Task["id"]) => void, updateTask: (task: Task) => void}) : JSX.Element => {
  const [isEditing, setIsEditing] = useState(false);
  const [titleUpdated, setTitleUpdated] = useState(title);
  const [descriptionUpdated, setDescriptionUpdated] = useState(description);
  const [statusUpdated, setStatusUpdated] = useState(status);
  const [dateUpdated, setDateUpdated] = useState(date); 
  const handleUpdated = () => {
    updateTask({id: id, title: titleUpdated, description: descriptionUpdated, status: statusUpdated, date: dateUpdated})
    setIsEditing(false);
  }
  return (
    <div>
      {
        isEditing ? (
          <div className="block w-72 p-6 bg-[#1d1c1c] border border-gray-200 rounded-lg shadow-md">
            <div className="flex flex-row justify-between items-center">
                <input
                  id="title"
                  value={titleUpdated}
                  onChange={(e) => setTitleUpdated(e.target.value)}
                  className="p-1 w-full mb-2 text-white bg-[#1d1c1c] border border-gray-200 rounded-md shadow-md"
                  placeholder="To Do Title"
                />
            </div>
            <input
              id="date"
              type="date"
              value={dateUpdated}
              onChange={(e) => setDateUpdated(e.target.value)}
              className="p-1 w-full mb-2 text-white bg-[#1d1c1c] border border-gray-200 rounded-md shadow-md"
              placeholder="Date Done"
            />
            <select
              name="status"
              id="status"
              value={statusUpdated}
              onChange={(e) => setStatusUpdated(e.target.value)}
              className="bg-[#1d1c1c] my-2 text-white border border-gray-300 text-sm rounded-lg p-2.5"
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
            <input
              id="description"
              value={descriptionUpdated}
              onChange={(e) => setDescriptionUpdated(e.target.value)}
              className="p-1 w-full mb-2 text-white bg-[#1d1c1c] border border-gray-200 rounded-md shadow-md"
              placeholder="Description"
            />
            <button
              className="bg-[#b7f36a] font-bold text hover:bg-[#99e545] focus:ring-4 focus:outline-none focus:ring-green-600 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              onClick={handleUpdated}
            >
              Save
            </button>
          </div>
        ) :  (
          <div className="block w-72 p-6 bg-[#1d1c1c] border border-gray-200 rounded-lg shadow-md">
            <div className="flex flex-row justify-between items-center">
                <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {title}
                </h5>
                <div className="flex flex-row justify-between items-center gap-2">
                  <button onClick={() => setIsEditing(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 20 20">
                      <path fill="#4f46e5" d="m2.292 13.36l4.523 4.756L.5 20zM12.705 2.412l4.522 4.755L7.266 17.64l-4.523-4.754zM16.142.348l2.976 3.129c.807.848.086 1.613.086 1.613l-1.521 1.6l-4.524-4.757L14.68.334l.02-.019c.119-.112.776-.668 1.443.033"/>
                    </svg>
                  </button>
                  <button onClick={() => deleteTask(id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                      <path fill="#dc2626" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"/>
                    </svg>
                  </button>
                </div>
            </div>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-base">
              {date}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-base">
              {status}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-base">
              {description}
            </p>
          </div>
        )
      }
    </div>
  )
}