import { useState } from "react";
import "./home.style.css";
import ModalAddTask from "../modal-add-task/modal-add-task.component";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handlerClick = (event) => {
    event.preventDefault();
    console.log("clicked", isOpen);
    setIsOpen(!isOpen);
    //en el modal que se abre enviar a contexto el cerrar modal y desde aqui capturar ese estado
  };

  return (
    <div className="p-1 h-full w-full">
      <div className="p-4 place-items-center rounded-lg mt-14">
        <div className="button-borders mb-6">
          <button className="primary-button" onClick={handlerClick}>
            Add Task
          </button>
        </div>
        {isOpen && <ModalAddTask></ModalAddTask>}
      </div>
    </div>
  );
};

export default Home;
