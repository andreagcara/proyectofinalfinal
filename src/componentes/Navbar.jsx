import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexto/auth.context";
function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  return (
    <nav className="bg-zinc-900 my-3 flex justify-between sm:items-center py-5 px-10 rounded-lg">
      <Link to={
        isAuthenticated ? "/tasks" : "/"
      }>
        <h1 className=" text-fuchsia-700 text-2xl font-bold">Administrador de tareas</h1>
      </Link>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li className="text-fuchsia-700">Bienvenido {user.username} </li>
            <li>
              <Link to="/add-task" className="bg-fuchsia-700 hover:bg-fuchsia-900 px-4 py-1 rounded-sm">Añadir tarea</Link>
            </li>
            <li>
              <Link
                to="/" className="text-fuchsia-700"
                onClick={() => {
                  logout();
                }}
              >
                Cerrar Sesión
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className="bg-fuchsia-700  hover:bg-fuchsia-900 px-4 py-1 rounded-sm">Login</Link>
            </li>
            <li>
              <Link to="/register" className="bg-fuchsia-700  hover:bg-fuchsia-900 px-4 py-1 rounded-sm">Registro</Link>
            </li>
          </>
        )}
      </ul>
  </nav>

  );
}
export default Navbar;
