import z from "zod"

export const PacienteBaseSchema = z.object({
  nombre: z.string().min(2, {
    message: "Nombre requerido",
  }),
  apellido1:z.string().min(2,{
    message:"Apellido paterno requerido",
  }),
  apellido2:z.string().min(2,{
    message:"Apellido materno requerido",
  }),
  ci:z.string().min(2,{
    message:"Carnet de indentidad requerido",
  }),
  celular:z.string(),
  edad:z.string().min(2,{
    message:"Edad requerida",
  }),
  direccion:z.string().min(2,{
    message:"Direccion requerida",
  }),
})


export const PacienteSchema = PacienteBaseSchema.extend({
  id: z.number().optional()
})
export type Paciente = z.infer<typeof PacienteSchema>
