import { useForm } from "react-hook-form";
import { useTasks } from "../contexto/taskContext";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TaskFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
        setValue("date", dayjs.utc(task.date).format("YYYY-MM-DD"));
      }
    }
    loadTask();
  }, []);

  const onSubmit = handleSubmit((data) => {
    const dataValid= {
      ...data,
      date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format()
    }
    if(data.date) dataValid.date = dayjs.utc(data.date).format();
    if (params.id) {
      updateTask(params.id, dataValid);
    } else {
      createTask(dataValid);
    }
    navigate("/tasks");
  });
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-900 max-w-md w-full p-10 rounded-md my-2 ">
        <form onSubmit={onSubmit}>
          <label htmlFor="title" className="text-fuchsia-700">
            Título
          </label>
          <input
            type="text"
            placeholder="Título"
            {...register("title")}
            className="w-full bg-zinc-800 text-white px-4 py-2 rounded-md"
            autoFocus
          />
          <label htmlFor="description" className="text-fuchsia-700">
            Descripción
          </label>
          <textarea
            rows="3"
            placeholder="Descripción"
            {...register("description")}
            className="w-full bg-zinc-800 text-white px-4 py-2 rounded-md my-2"
          ></textarea>
          <label htmlFor="date" className="text-fuchsia-700">
            Fecha
          </label>
          <input
            type="date"
            {...register("date")}
            className="w-full bg-zinc-800 text-white px-4 py-2 rounded-md my-2"
          />
          <button className="bg-fuchsia-700 px-3 py-2 rounded-md ">
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
}
export default TaskFormPage;
