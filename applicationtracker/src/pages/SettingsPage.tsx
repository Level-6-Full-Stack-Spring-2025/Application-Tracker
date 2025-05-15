import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

function SettingsPage() {
  return (
    <div>
            <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <h1>settings page</h1>
      </main>
    </SidebarProvider>
    </div>
  )
}

export default SettingsPage