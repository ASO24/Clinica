import { supabase } from "@/lib/supabase_client";
import type { Paciente } from "@/types/paciente";

export const ObtenerPacientes= async():Promise<Paciente[]> =>{
    const{data,error}=await supabase
    .from('Paciente')
    .select('*')
    if(error){
        throw new Error(error.message)
    }
    return data as Paciente[]
}

export const CrearPaciente = async(paciente:Paciente)=>{
    const {data,error}= await supabase
    .from('Paciente')
    .insert([paciente])
    if(error){
        console.log(error?.message)
        throw new Error(error.message)
    }
    return data

}
export const Update = async(paciente:Paciente)=>{
    const{data,error}= await supabase
    .from('Paciente')
    .update(({
        nombre:paciente.nombre,
        apellido1:paciente.apellido1,
        apellido2:paciente.apellido2,
        ci:paciente.ci,
        edad:paciente.edad,
        celular:paciente.celular,
        direccion:paciente.direccion
    }))
    .eq("id",paciente.id)
    if(error){
        throw new Error(error.message)
    }
    return data
}