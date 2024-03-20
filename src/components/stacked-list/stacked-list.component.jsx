import { useContext } from "react";
import { TaskContext } from "../../context/task.context";
import { useState } from "react";
import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline";

const StackedList = () => {
  const [isTaskDone, setIsTaskDone] = useState(false);
  const { taskList, setIsOpenEdit, setCurrenTask, setIsOpenDelete, setIsDone } = useContext(TaskContext);
  console.log(taskList);
  const handleClickDelete = (task) => {
    setIsOpenDelete(true);
    setCurrenTask(task);
  };

  const handleClickEdit = (task) => {
    setIsOpenEdit(true);
    setCurrenTask(task);
  };

  const handleDoneClick = (id) => {
    console.log("handleDoneClick", id);
    setIsTaskDone(!isTaskDone);
    setIsDone(id);
  };

  return (
    <div className="grid grid-flow-col gap-3">
      <div className="bg-red-100 col-span-1">
        <ul role="list" className="border-3 z-10 border">
          {taskList.map((task) => (
            <li key={task.id} className="flex justify-around gap-x-6 py-5 border bg-slate-300 ">
              <div
                className="flex min-w-0 gap-x-4 border-red-600 border-dotted"
                onClick={() => handleDoneClick(task.id)}
              >
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {task.done ? task.name : <del>{task.name}</del>}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">{task.date}</p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <div className="mt-1 flex items-center gap-x-1.5">
                  <button
                    onClick={() => handleClickEdit(task)}
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  >
                    <PencilIcon className="h-6 w-6 text-gray-600" aria-hidden="true" />
                  </button>
                  <button
                    onClick={() => handleClickDelete(task)}
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  >
                    <TrashIcon className="h-6 w-6 text-gray-600" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StackedList;
