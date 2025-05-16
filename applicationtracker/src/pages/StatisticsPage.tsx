import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

function StatisticsPage() {
  return (
    <div>
      <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <h1>statistics page</h1>
      </main>
    </SidebarProvider>
    </div>
  )
}

export default StatisticsPage