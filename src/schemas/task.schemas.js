import{ z } from 'zod'

export const createTasksSchema = z.object({
    title: z.string({
        required_error: 'el titulo es obligatorio'
    }),
    description: z.string({
        required_error:'la descripción es obligatoria'
    }),
    date: z.string().datetime().optional(),
});