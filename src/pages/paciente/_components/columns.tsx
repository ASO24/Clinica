
import type { Paciente } from "@/types/paciente"
import type{ ColumnDef } from "@tanstack/react-table"
import DialogPaciente from "./dialog-paciente"


export const columns: ColumnDef<Paciente>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "nombre",
    header: "name",
  },
  {
    accessorKey: "apellido1",
    header: "Apellido",
  },
  {
    accessorKey: "apellido2",
    header: "Apellido",
  },
  {
    accessorKey: "edad",
    header: "Edad",
  },
  {
    accessorKey: "celular",
    header: "Celular",
  },
  {
    accessorKey: "ci",
    header: "Ci",
  },
  {
    accessorKey: "direccion",
    header: "Direccion",
  },
  {
    id:"actions",
    header:"Acciones",
    cell:({row})=>{
      const paciente = row.original
      return(
        <div>
          <DialogPaciente modo="editar" paciente={paciente}/>
        </div>
      )
    }
  },
]