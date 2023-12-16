import { useContext } from "react";
import { TaskContext } from "../../context/task.context";
import { useState } from "react";

const StackedList = () => {
  const { setIsOpen, isOpen, task, taskList } = useContext(TaskContext);
  console.log(taskList);
  return (
    <ul role="list" className="divide-y divide-gray-100 ">
      {taskList.map((person) => (
        <li key={person.taskName} className="flex justify-evenly gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.taskName} alt="" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{person.taskName}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.taskName}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{person.taskName.role}</p>
            {person.taskName.lastSeen ? (
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Last seen <time dateTime={person.taskName}>{person.taskName}</time>
              </p>
            ) : (
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs leading-5 text-gray-500">Online</p>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default StackedList;