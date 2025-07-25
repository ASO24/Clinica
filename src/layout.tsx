import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <SidebarProvider>
      <div className="flex w-screen h-screen">
        <AppSidebar />
        <main className="flex-1 w-full h-full">
          <SidebarTrigger/>
          <Outlet/>
        </main>
      </div>
    </SidebarProvider>
  )
}
