import { createContext, useEffect, useState } from "react";
import { getCurrentDate } from "../utils/getDate";

export const TaskContext = createContext({
  task: null,
  setTask: () => null,
  taskList: [],
  setTaskList: () => null,
  isOpen: false,
  setIsOpen: () => false,
});

export const addTaskToList = (task, taskList) => {
  console.log(task);
  return [...taskList, { ...task, id: taskList.length + 1, date: getCurrentDate() }];
};

export const removeTaskToList = (id, taskList) => {
  const newTaskList = taskList.filter((el) => el.id != id);
  return newTaskList;
};

export const editTaskList = (task, taskList) => {
  const newTaskList = taskList.map((element) => {
    if (element.id == task.id) {
      element.name = task.name;
    }
  });
  return newTaskList;
};

export const TaskProvider = ({ children }) => {
  const [task, setTask] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const addTask = (task) => setTaskList(addTaskToList(task, taskList));

  const removeTask = (id) => setTaskList(removeTaskToList(id, taskList));

  const editTask = (id) => setTaskList(editTaskList(id, taskList));
  console.log(isOpen);
  const value = { task, isOpen, setIsOpen, addTask, taskList, removeTask, editTask };
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
