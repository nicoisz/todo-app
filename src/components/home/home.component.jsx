import { useState } from "react";
import "./home.style.css";
import ModalAddTask from "../modal-add-task/modal-add-task.component";
import StackedList from "../stacked-list/stacked-list.component";

import { useContext } from "react";
import { TaskContext } from "../../context/task.context";

const Home = () => {
  const { setIsOpen, isOpen } = useContext(TaskContext);

  const handlerClick = (event) => {
    event.preventDefault();
    setIsOpen(true);
    console.log(isOpen);

    //en el modal que se abre enviar a contexto el cerrar modal y desde aqui capturar ese estado
  };

  return (
    <div className="p-1 h-full w-full">
      <div className="p-4 place-items-center rounded-lg m-14">
        <div className="button-borders mb-6">
          <button className="primary-button" onClick={handlerClick}>
            Add Task
          </button>
        </div>
        {isOpen && <ModalAddTask></ModalAddTask>}
      </div>

      <div className="m-14">
        <StackedList></StackedList>
      </div>
    </div>
  );
};

export default Home;
