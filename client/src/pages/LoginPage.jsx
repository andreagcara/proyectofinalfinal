import { useForm } from "react-hook-form";
import { useAuth } from "../contexto/auth.context";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-900 max-w-md w-full p-10 rounded-md">
        {signinErrors.map((error, i) => (
          <div className="bg-pink-700 p-2 text-white text-center my-2" key={i}>
            {error}
          </div>
        ))}
        <h1 className="text-3xl font-bold my-2 text-fuchsia-700">Login</h1>

        <form onSubmit={onSubmit}>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-800 text-white px-4 py-2 rounded-md my-2"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-pink-700">El correo es obligatorio</p>
          )}
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-800 text-white px-4 py-2 rounded-md my-2"
            placeholder="Contraseña"
          />
          {errors.password && (
            <p className="text-pink-700">La Contraseña es obligatoria</p>
          )}
          <button
            type="submit"
            className="text-white bg-fuchsia-700 hover:bg-fuchsia-900 px-4 py-2 rounded-md "
          >
            Login
          </button>
        </form>
        <p className="flex gap-x-2 justify-between text-fuchsia-700">
          ¿No estas registrado?
          <Link to="/register">Registrate</Link>
        </p>
      </div>
    </div>
  );
}
export default LoginPage;
