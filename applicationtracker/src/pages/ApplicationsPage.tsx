import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

function ApplicationsPage() {
  return (
    <div>
            <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <h1>applications page</h1>
      </main>
    </SidebarProvider>
    </div>
  )
}

export default ApplicationsPage