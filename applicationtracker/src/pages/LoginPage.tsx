import Login from "@/components/ui/Login"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

function LoginPage() {
  return (
    <div>
            <SidebarProvider>
      <AppSidebar />
        <SidebarTrigger/>
        <main className="w-full">
          <div className="flex justify-center pt-80">
            <Login/>
          </div>
        </main>
    </SidebarProvider>
    </div>
  )
}

export default LoginPage