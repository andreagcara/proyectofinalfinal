import { useForm } from "react-hook-form";
import { useTask } from "../contexto/taskContext";

import React from "react";
function TaskFormPage() {
  const { register, handleSubmit } = useForm();
  const { createTask } = useTask();

  const onSubmit = handleSubmit((data) => {
    createTask(data);
  });
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md my-2 ">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Título"
          {...register("title")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
          autoFocus
        />
        <textarea
          rows="3"
          placeholder="Descripción"
          {...register("description")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        ></textarea>
        <button>Guardar</button>
      </form>
    </div>
  );
}
export default TaskFormPage;
