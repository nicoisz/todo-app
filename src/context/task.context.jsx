import { createContext, useState } from "react";

export const TaskContext = createContext({
  task: null,
  setTask: () => null,
  isOpen: false,
  setIsOpen: () => false,
});

export const TaskProvider = ({ children }) => {
  const [task, setTask] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const value = { task, setTask, isOpen, setIsOpen };

  console.log(task, isOpen);

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
