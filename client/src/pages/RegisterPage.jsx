import { useForm } from "react-hook-form";
import { useAuth } from "../contexto/auth.context";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";


function RegisterPage() {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    await signup(values);
  });
  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md ">
      {
        registerErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white" key={i}> 
            {error}
          </div>
        ))
      }
      <form onSubmit={onSubmit}>
        <input
          type="text"
          {...register("username", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Nombre de usuario"
        />
        {errors.username && (<p className="text-red-500 ">El nombre es obligatorio</p>)}
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Email"
        />
        {errors.email && (<p className="text-red-500" >El correo es obligatorio</p>)}
        <input
          type="password"
          {...register("password", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Contraseña"
        />
        {errors.password && (<p className="text-red-500" >La Contraseña es obligatoria</p>)}
        <button type="submit">Register</button>
      </form>
      <p className="flex gap-x-2 justify-between">
          ¿Ya tienes cuenta?
          <Link to="/login" className="text-fuchsia-700">
            Login
          </Link>
        </p>
    </div>
  );
}
export default RegisterPage;
