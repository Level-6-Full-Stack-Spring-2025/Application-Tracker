import { AppSidebar } from "@/components/app-sidebar"
import ResumeBuilderForm from "@/components/ResumeBuilderForm"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

function ResumeBuilderPage() {
  return (
    <div>
      <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <SidebarTrigger />
          <ResumeBuilderForm/>
      </main>
    </SidebarProvider>
    </div>
  )
}

export default ResumeBuilderPage