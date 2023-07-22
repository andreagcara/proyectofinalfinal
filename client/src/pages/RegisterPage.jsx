import { useForm } from "react-hook-form";
import { useAuth } from "../contexto/auth.context";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    await signup(values);
  });
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-900 max-w-md p-10 rounded-md ">
        {registerErrors.map((error, i) => (
          <div className="bg-pink-700 p-2 text-white" key={i}>
            {error}
          </div>
        ))}
        <form onSubmit={onSubmit}>
        <h1  className="text-3xl font-bold my-2 text-fuchsia-700">Registro</h1>

          <input
            type="text"
            {...register("username", { required: true })}
            className="w-full bg-zinc-800 text-white px-4 py-2 rounded-md my-2"
            placeholder="Nombre de usuario"
          />
          {errors.username && (
            <p className="text-pink-700 ">El nombre es obligatorio</p>
          )}
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
          <button type="submit" className="text-white bg-fuchsia-700 hover:bg-fuchsia-900 px-4 py-2 rounded-md ">Registrarme</button>
        </form>
        <p className="flex gap-x-2 justify-between  text-fuchsia-700">
          ¿Ya tienes cuenta?
          <Link to="/login" className="text-fuchsia-700">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
export default RegisterPage;
