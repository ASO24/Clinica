import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { UserPlus2 } from "lucide-react"
import { FormPaciente } from "./form-paciente"
import { useState, type FC } from "react"
import type { Paciente } from "@/types/paciente"

interface Props{
    modo: "crear"|"editar"
    paciente?:Paciente
}

const DialogPaciente:FC<Props> = ({modo,paciente}) => {
    const [open, setOpen] = useState(false)
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="default">
                    <UserPlus2 />
                    <span>Agregar paciente</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Paciente</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4">
                    <FormPaciente onSuccess={()=>{setOpen(false)}} modo={modo} paciente={paciente} />
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                        <Button type="submit" form="paciente-form">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
export default DialogPaciente