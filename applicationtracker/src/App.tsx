import './App.css'
import JobCard from './components/ui/jobCard'

function App() {
  

  return (
    <>
    <JobCard jobTitle='AI smth' location='@ Docusign washington' tags={[{title: "In progress", variant: "progress"}, {title: "AI/ML", variant:undefined}, {title: "Urgent", variant: "urgent"}]}/>
    </>
  )
}

export default App
