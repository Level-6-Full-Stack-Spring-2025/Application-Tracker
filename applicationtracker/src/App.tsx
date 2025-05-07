import './App.css'
import JobCard from './components/ui/jobCard'
import Login from './components/ui/Login'
import Signup from './components/ui/Signup'

function App() {
  

  return (
    <>
    <JobCard jobTitle='AI smth' location='@ Docusign washington' tags={[{title: "In progress", variant: "progress"}, {title: "AI/ML", variant:undefined}, {title: "Urgent", variant: "urgent"}]}/>
    <Login/>
    <Signup/>
    </>
  )
}

export default App
