import { AppSidebar } from "../components/app-sidebar"
import JobCard from "../components/NewJobCard"
import TopBar from "../components/TopBar"
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar"

function App() {
  return (
    <div className="min-h-screen bg-white text-black">

      <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <SidebarTrigger />
        <div className="flex flex-col items-center">
            <div className="flex justify-between">
              <TopBar/>
            </div>
            {/* Job Grid */}
            {/* TODO: Make it so that jobcard content is coming from the actual job postings 
            * NOTE --- if API does not get set up in time, make individual static ones using a separate array with content */}
            <div className=" grid-cols-3 grid gap-4">
                  {Array.from({ length: 10 }).map(() => (
                  <JobCard jobTitle="AI Platform Software Engineer Intern" location="@ Docusign washington" tags={[{ title: "In progress", variant: "progress" }, { title: "AI/ML", variant: undefined }, { title: "Urgent", variant: "urgent" }]} />
                ))}
            </div>
        </div>
      </main>
    </SidebarProvider>

    </div>
  )
}

export default App