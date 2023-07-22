import React from "react";
import { useTasks } from "../contexto/taskContext";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  return (
    <div className="bg-zinc-900  w-full  p-10 rounded-md">
      <header className="flex justify-between w-full">
        <h1 className="text-2xl text-fuchsia-700 font-bold">{task.title}</h1>
        <div className="flex gap-x-2 items-center">
          <button
            className="bg-pink-700 hover:bg-pink-950 text-white px-4 py-2 rounded-md"
            onClick={() => {
              console.log(task._id);
              deleteTask(task._id);
            }}
          >
            Borrar
          </button>
          <Link
            to={`/tasks/${task._id}`}
            className="bg-fuchsia-700 hover:bg-fuchsia-900 text-white px-4 py-2 rounded-md "
          >
            Editar
          </Link>
        </div>
      </header>
      <p>{task.description}</p>
      <p>{dayjs(task.date).utc().format("DD/MM/YYYY")}</p>
    </div>
  );
}

export default TaskCard;
