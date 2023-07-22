import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-900 max-w-md w-full p-10 rounded-md">
        <h1 className="text-fuchsia-700 font-bold text-3xl my-5 ">
          !Tú nueva página de administración de tareas!
        </h1>
        <Link to="/register" className="text-white bg-fuchsia-700 hover:bg-fuchsia-900 items-center px-4 py-2 rounded-md">
            Empezar
          </Link>
      </div>
    </div>
  );
}
export default HomePage;
