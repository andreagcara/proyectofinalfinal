import React, { useEffect } from "react";
import { useTask } from "../contexto/taskContext";

function TaskPage() {
  const { getTasks, tasks } = useTask();

  useEffect(() => {
    getTasks();
  }, []);
  if(tasks.length === 0) return (<h1>No hay tareas</h1>);
  return (
    <div>
      {tasks.map((tasks) => (
        <div key={tasks._id}>
          <h1>{tasks.title}</h1>
          <p>{tasks.description}</p>
        </div>
      ))}
    </div>
    );
}
export default TaskPage;
