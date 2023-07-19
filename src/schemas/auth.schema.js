import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: "El nombre es obligatorio",
  }),
  email: z
    .string({
      required_error: "Correo obligatorio",
    })
    .email({
      message: "Correo no valido",
    }),
  password: z
    .string({
      required_error: "Contraseña obligatoria",
    })
    .min(6, {
      message: "La contraseña debe de tener más de 6 caracteres",
    }),
});
export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Correo obligatorio",
    })
    .email({
      message: "Correo Incorrecto",
    }),
  password: z
    .string({
      required_error: "Contraseña obligatoria",
    })
    .min(6, {
      message: "Contraseña incorrecta",
    }),
});
