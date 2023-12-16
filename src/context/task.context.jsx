import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext({
  task: null,
  setTask: () => null,
  taskList: [],
  setTaskList: () => null,
  isOpen: false,
  setIsOpen: () => false,
});

export const addTaskToList = (task, taskList) => {
  taskList.push(task);
  console.log(taskList);
  return taskList;
};

export const TaskProvider = ({ children }) => {
  const [task, setTask] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const addTask = (task) => setTaskList(addTaskToList(task, taskList));

  const value = { task, isOpen, setIsOpen, addTask, taskList };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
