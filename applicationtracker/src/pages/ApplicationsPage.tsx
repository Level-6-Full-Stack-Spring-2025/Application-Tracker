import { AppSidebar } from "@/components/app-sidebar"
import { KanbanBoard } from "@/components/KanBanBoard"
import { CardTitle } from "@/components/ui/card"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"


function ApplicationsPage() {
  return (
    <div>
            <SidebarProvider>
      <AppSidebar />
        <SidebarTrigger/>
        <main className="w-full justify-center pt-5">
          <CardTitle className="mt-10 mb-5 text-center font-lalezar text-2xl text-sidebar-foreground/70">Organize your applications here</CardTitle>
          <KanbanBoard />
        </main>
    </SidebarProvider>
    </div>
  )
}

export default ApplicationsPage