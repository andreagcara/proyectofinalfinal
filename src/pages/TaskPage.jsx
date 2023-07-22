import React, { useEffect } from "react";
import { useTasks } from "../contexto/taskContext";
import TaskCard from "../componentes/TaskCard";

function TaskPage() {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);
  if(tasks.length === 0) return (<h1 className="text-fuchsia-700 font-bold text-3xl my-5 ">No hay tareas</h1>);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2">
      {tasks.map((task) => (
        <TaskCard task={task} key={task._id} />
      ))}
    </div>
    );
}
export default TaskPage;
