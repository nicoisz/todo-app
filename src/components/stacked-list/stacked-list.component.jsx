import { useContext } from "react";
import { TaskContext } from "../../context/task.context";
import { useState } from "react";
import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline";

const StackedList = () => {
  const { taskList, removeTask, setIsOpen, isOpen } = useContext(TaskContext);
  const [done, setDone] = useState(false);
  console.log(taskList);
  const handleClick = (id) => {
    setDone(!done);
  };

  const handleClickDelete = (id) => {
    removeTask(id);
  };

  const handleClickEdit = (event) => {
    setIsOpen(true);
  };

  return (
    <div>
      <ul role="list" className="border-3 z-10 ">
        {taskList.map((task) => (
          <li
            key={task.id}
            className={`flex justify-around gap-x-6 py-5 border   ${
              done ? "border-red-100 bg-red-300" : "border-green-100 bg-green-300"
            }`}
            onClick={() => handleClick(task.id)}
          >
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{task.name}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{task.date}</p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{task.name.role}</p>
              {task.name.lastSeen ? (
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Last seen <time dateTime={task.name}>{task.name}</time>
                </p>
              ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <button
                    onClick={() => handleClickEdit(task)}
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  >
                    <PencilIcon className="h-6 w-6 text-gray-600" aria-hidden="true" />
                  </button>
                  <button
                    onClick={() => handleClickDelete(task.id)}
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  >
                    <TrashIcon className="h-6 w-6 text-gray-600" aria-hidden="true" />
                  </button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StackedList;
