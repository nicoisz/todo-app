import { createContext, useState } from "react";

export const TaskContext = createContext({
  currentTask: null,
  setCurrentTask: () => null,
  isOpen: false,
  setIsOpen: () => false,
});

export const TaskProvider = ({ children }) => {
  const [currentTask, setCurrentTask] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const value = { currentTask, setCurrentTask, isOpen, setIsOpen };

  console.log(currentTask);

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
