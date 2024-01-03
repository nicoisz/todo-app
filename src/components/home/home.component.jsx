import { useState } from "react";
import "./home.style.css";
import ModalAddTask from "../modal-add-task/modal-add-task.component";
import ModalDeleteTask from "../modal-delete-task/modal-delete-task.component";
import StackedList from "../stacked-list/stacked-list.component";

import { useContext } from "react";
import { TaskContext } from "../../context/task.context";

const Home = () => {
  const { setIsOpenEdit, isOpenEdit, isOpenDelete } = useContext(TaskContext);
  const handlerClick = (event) => {
    event.preventDefault();
    setIsOpenEdit(true);
  };

  console.log("home", isOpenDelete);
  return (
    <div className="w-full h-screen bg-slate-800">
      <div className="p-4 place-items-center rounded-lg m-14">
        <div className=" mb-6">
          <button
            onClick={handlerClick}
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            Add Task
          </button>
        </div>
        {isOpenEdit && <ModalAddTask></ModalAddTask>}
        {isOpenDelete && <ModalDeleteTask></ModalDeleteTask>}
      </div>

      <div className="m-14">
        <StackedList></StackedList>
      </div>
    </div>
  );
};

export default Home;
