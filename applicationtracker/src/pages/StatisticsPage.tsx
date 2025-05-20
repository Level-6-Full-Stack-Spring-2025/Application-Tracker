import { AppSidebar } from "@/components/app-sidebar"
import { BarChartDisplay } from "@/components/BarChartDisplay"
import { PieChartDisplay } from "@/components/PieChartDisplay"
import { RadicalChartDisplay } from "@/components/RadicalChartDisplay"
import { Stats8 } from "@/components/stats8"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

function StatisticsPage() {
  return (
    <div>
      <SidebarProvider>
      <AppSidebar />
      <main className="w-full pr-5">
        <SidebarTrigger />
        <div className="flex justify-center gap-5">
        <div className="flex flex-col gap-5 content-center">   
          <Stats8/>     
          <BarChartDisplay/>
          </div>
          <div className="flex flex-col gap-5">   
            <PieChartDisplay/>
            <RadicalChartDisplay/>
          </div>
        </div>


      </main>
    </SidebarProvider>
    </div>
  )
}

export default StatisticsPage