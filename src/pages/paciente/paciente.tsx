import { DataTable } from "./_components/data-table"
import { columns } from "./_components/columns"
import { useEffect, useState } from "react"
import type { Paciente } from "@/types/paciente"
import { ObtenerPacientes } from "@/services/paciente-service"
import DialogPaciente from "./_components/dialog-paciente"

const PagePaciente = () => {
    const[pacientes,setPacientes]=useState<Paciente[]>([])
    useEffect(()=>{
        const fetch= async()=>{
            try{
                const data = await ObtenerPacientes()
                setPacientes(data)
            }catch(error){
                console.log(error)
            }
        }
        fetch()
    },[])
    return (
        <div className="flex flex-col  px-6 py-4 ">
            <h1 className="font-bold">
                Pacientes
            </h1>
            <div className="my-3">
                <DialogPaciente modo="crear"/>
            </div>
            <div className="container mx-auto py-10">
                <DataTable columns={columns} data={pacientes} />
            </div>
        </div>
    )
}
export default PagePaciente