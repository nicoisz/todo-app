import { createContext, useEffect, useState } from "react";
import { getCurrentDate } from "../utils/getDate";

export const TaskContext = createContext({
  task: null,
  setTask: () => null,
  taskList: [],
  setTaskList: () => null,
  isOpenEdit: false,
  setIsOpenEdit: () => false,

  isOpenDelete: false,
  setIsOpenDelete: () => false,
});

export const addTaskToList = (task, taskList) => {
  return [...taskList, { ...task, id: taskList.length + 1, date: getCurrentDate() }];
};

export const removeTaskToList = (id, taskList) => {
  const newTaskList = taskList.filter((el) => el.id != id);
  return newTaskList;
};

export const updateList = (task, taskList) => {
  console.log(task, taskList);
  const newTaskList = taskList.map((element) => {
    if (element.id == task.id) {
      element.name = task.name;
    }
  });
  return newTaskList;
};

export const TaskProvider = ({ children }) => {
  const [task, setTask] = useState(null);
  const [currentTask, setCurrenTask] = useState(null);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const addTask = (task) => setTaskList(addTaskToList(task, taskList));

  const removeTask = (id) => setTaskList(removeTaskToList(id, taskList));
  const updateTaskList = (id) => setTaskList(updateList(currentTask));

  //const taskToEdit = (task) => setCurrenTask(task);
  console.log("TaskProvider", isOpenDelete);
  const value = {
    task,
    isOpenEdit,
    setIsOpenEdit,
    isOpenDelete,
    setIsOpenDelete,
    addTask,
    taskList,
    removeTask,
    setCurrenTask,
    currentTask,
    updateTaskList,
  };
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
