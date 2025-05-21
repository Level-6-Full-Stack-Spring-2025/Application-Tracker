import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormEvent } from "react"

export default function ResumeBuilderForm() {
  const submit = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const submitButton = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement;
    if (submitButton) submitButton.disabled = true;
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      github: "GitHub",
      githubLink: formData.get("githubLink"),
      linkedin: "LinkedIn",
      linkedinLink: formData.get("linkedinLink"),
      
      company1: formData.get("company1"),
      city1: formData.get("city1"),
      state1: formData.get("state1"),
      jobtitle1: formData.get("jobtitle1"),
      startdate1: formData.get("startdate1"),
      enddate1: formData.get("enddate1"),
      job1item1: formData.get("job1item1"),
      job1item2: formData.get("job1item2"),
      
      company2: formData.get("company2"),
      city2: formData.get("city2"),
      state2: formData.get("state2"),
      jobtitle2: formData.get("jobtitle2"),
      startdate2: formData.get("startdate2"),
      enddate2: formData.get("enddate2"),
      job2item1: formData.get("job2item1"),
      job2item2: formData.get("job2item2"),
      
      company3: formData.get("company3"),
      city3: formData.get("city3"),
      state3: formData.get("state3"),
      jobtitle3: formData.get("jobtitle3"),
      startdate3: formData.get("startdate3"),
      enddate3: formData.get("enddate3"),
      job3item1: formData.get("job3item1"),
      job3item2: formData.get("job3item2"),
      
      school1: formData.get("school1"),
      schoolcity1: formData.get("schoolcity1"),
      schoolstate1: formData.get("schoolstate1"),
      degree1: formData.get("degree1"),
      field1: formData.get("field1"),
      schoolstatedate1: formData.get("schoolstatedate1"),
      schoolenddate1: formData.get("schoolenddate1"),
      
      school2: formData.get("school2"),
      schoolcity2: formData.get("schoolcity2"),
      schoolstate2: formData.get("schoolstate2"),
      degree2: formData.get("degree2"),
      field2: formData.get("field2"),
      schoolstatedate2: formData.get("schoolstatedate2"),
      schoolenddate2: formData.get("schoolenddate2"),
      
      skill1: formData.get("skill1"),
      skill1level: formData.get("skill1level"),
      skill2: formData.get("skill2"),
      skill2level: formData.get("skill2level"),
      skill3: formData.get("skill3"),
      skill3level: formData.get("skill3level"),
      skill4: formData.get("skill4"),
      skill4level: formData.get("skill4level"),
      
      project1: formData.get("project1"),
      project1link: formData.get("project1link"),
      project2: formData.get("project2"),
      project2link: formData.get("project2link")
    } 

    try{
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        const raw = JSON.stringify(data);
        
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
        };
        fetch("http://localhost:3002/submit", requestOptions)
        .then((response) => {
          if (!response.ok) throw new Error('Network response was not ok');
          return response.blob(); // Get the PDF as a blob
        })
        .then((blob) => {
          // Create download link
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'resume.pdf';
          document.body.appendChild(a);
          a.click();
          a.remove();
          window.URL.revokeObjectURL(url);
        })
        .catch((error) => console.error('Error:', error))
        .finally(() => {
          // Re-enable submit button whether success or failure
          const submitButton = document.querySelector('button[type="submit"]');
          if (submitButton) submitButton.disabled = false;
        });
          }catch(err){
              console.log(err)
          }
        }
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   github: '',
  //   linkedin: '',
  //   company1: '',
  //   jobLocation1: '',
  //   title1: '',
  //   dates1: '',
  //   description1: '',
  //   description2: '',
  //   company2: '',
  //   jobLocation2: '',
  //   title2: '',
  //   dates2: '',
  //   description3: '',
  //   description4: '',
  //   schoolName: '',
  //   schoolLocation: '',
  //   degree: '',
  //   schoolDates: '',
  //   skill1: '',
  //   skillnum1: '',
  //   skill2: '',
  //   skillnum2: '',
  //   skill3: '',
  //   skillnum3: '',
  //   skill4: '',
  //   skillnum4: '',
  //   projecttitle1: '',
  //   projectlink1: '',
  //   projecttitle2: '',
  //   projectlink2: '',
  // });
  // const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   });
  // };
  // const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch('http://localhost:5173/resumebuilder', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });
  //     if (!response.ok) {
  //       throw new Error('Failed to generate PDF');
  //     }
  //     const blob = await response.blob();
  //     const url = window.URL.createObjectURL(blob);
  //     const link = document.createElement('a');
  //     link.href = url;
  //     link.setAttribute('download', `${formData.name.replace(/\s+/g, "_")}.pdf`);
  //     document.body.appendChild(link);
  //     link.click();
  //     link.remove();
  //     window.URL.revokeObjectURL(url);
  //   } catch (error) {
  //     console.error('Error generating PDF:', error);
  //     alert('Failed to generate PDF. Please try again.');
  //   }
  // };
    return(
      <div className="flex justify-center w-full">
        <Card className="flex w-200 shadow-lg bg-card text-white font-lalezar py-5 mb-10">
        <CardHeader>
            <CardTitle className="text-center text-2xl">Build Your Resume</CardTitle>
        </CardHeader>
        <CardContent>
        <form className="w-full space-y-2 text-center" onSubmit={submit}>
        <CardTitle className="text-center text-xl">Contact Information</CardTitle>

            <Label className="text-md whitespace-nowrap">
              Full Name:
              <Input
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  // value={formData.name}
                  // onChange={handleChange}
                  required
              />
            </Label>
            <Label className="text-md whitespace-nowrap">
              Email:
              <Input
                name="email"
                type="email"
                placeholder="Email"
                // value={formData.email}
                // onChange={handleChange}
                required
            />    
            </Label>

            <Label className="text-md whitespace-nowrap">
              Github URL:
              <Input
                name="githubLink"
                type="url"
                placeholder="Github"
                // value={formData.github}
                // onChange={handleChange}
                required
            />   
            </Label>

            <Label className="text-md whitespace-nowrap">
              LinkedIn URL:
              <Input
                name="linkedinLink"
                type="url"
                placeholder="LinkedIn"
                // value={formData.linkedin}
                // onChange={handleChange}
                required
            />  
            </Label>
            <CardTitle className="text-center text-xl mt-5">Professional Experience</CardTitle>
            Experience #1
            <Label className="text-xl whitespace-nowrap">
              <Input
                name="company1"
                type="text"
                placeholder="Company"
                // value={formData.company1}
                // onChange={handleChange}
                required
            />  
              <Input
                name="city1"
                type="text"
                placeholder="City"
                // value={formData.jobLocation1}
                // onChange={handleChange}
                required
            />  
            <Input
                name="state1"
                type="text"
                placeholder="State"
                // value={formData.jobLocation1}
                // onChange={handleChange}
                required
            />
            </Label>

            <Label className="text-xl whitespace-nowrap">
            <Input
                name="jobtitle1"
                type="text"
                placeholder="Title"
                // value={formData.title1}
                // onChange={handleChange}
                required
            />  
              <Input
                name="startdate1"
                type="text"
                placeholder="mon year"
                // value={formData.dates1}
                // onChange={handleChange}
                required
            />  
            <Input
                name="enddate1"
                type="text"
                placeholder="mon year"
                // value={formData.dates1}
                // onChange={handleChange}
                required
            />  
            </Label>
            
            <Label className="text-xl whitespace-nowrap">
            <Input
                name="job1item1"
                type="text"
                placeholder="Description"
                // value={formData.description1}
                // onChange={handleChange}
                required
              />
            <Input
                name="job1item2"
                type="text"
                placeholder="Description"
                // value={formData.description2}
                // onChange={handleChange}
                required
              />
            </Label>
            
            Experience #2
            <Label className="text-xl whitespace-nowrap">
              <Input
                name="company2"
                type="text"
                placeholder="Company"
                // value={formData.company2}
                // onChange={handleChange}
                required
            />  
                <Input
                name="city2"
                type="text"
                placeholder="City"
                // value={formData.jobLocation1}
                // onChange={handleChange}
                required
            />  
            <Input
                name="state2"
                type="text"
                placeholder="State"
                // value={formData.jobLocation1}
                // onChange={handleChange}
                required
            />
            </Label>

            <Label className="text-xl whitespace-nowrap">
            <Input
                name="jobtitle2"
                type="text"
                placeholder="Title"
                // value={formData.title1}
                // onChange={handleChange}
                required
            />  
              <Input
                name="startdate2"
                type="text"
                placeholder="mon year"
                // value={formData.dates1}
                // onChange={handleChange}
                required
            />  
            <Input
                name="enddate2"
                type="text"
                placeholder="mon year"
                // value={formData.dates1}
                // onChange={handleChange}
                required
            />  
            </Label>
            
            <Label className="text-xl whitespace-nowrap">
            <Input
                name="job2item1"
                type="text"
                placeholder="Description"
                // value={formData.description1}
                // onChange={handleChange}
                required
              />
            <Input
                name="job2item2"
                type="text"
                placeholder="Description"
                // value={formData.description2}
                // onChange={handleChange}
                required
              />
            </Label>

            Experience #3
            <Label className="text-xl whitespace-nowrap">
              <Input
                name="company3"
                type="text"
                placeholder="Company"
                // value={formData.company2}
                // onChange={handleChange}
                required
            />  
                <Input
                name="city3"
                type="text"
                placeholder="City"
                // value={formData.jobLocation1}
                // onChange={handleChange}
                required
            />  
            <Input
                name="state3"
                type="text"
                placeholder="State"
                // value={formData.jobLocation1}
                // onChange={handleChange}
                required
            />
            </Label>

            <Label className="text-xl whitespace-nowrap">
            <Input
                name="jobtitle3"
                type="text"
                placeholder="Title"
                // value={formData.title1}
                // onChange={handleChange}
                required
            />  
              <Input
                name="startdate3"
                type="text"
                placeholder="mon year"
                // value={formData.dates1}
                // onChange={handleChange}
                required
            />  
            <Input
                name="enddate3"
                type="text"
                placeholder="mon year"
                // value={formData.dates1}
                // onChange={handleChange}
                required
            />  
            </Label>
            
            <Label className="text-xl whitespace-nowrap">
            <Input
                name="job3item1"
                type="text"
                placeholder="Description"
                // value={formData.description1}
                // onChange={handleChange}
                required
              />
            <Input
                name="job3item2"
                type="text"
                placeholder="Description"
                // value={formData.description2}
                // onChange={handleChange}
                required
              />
            </Label>

            <CardTitle className="text-center text-xl mt-5">Education</CardTitle>
            School #1
            <Label className="text-xl whitespace-nowrap">
            <Input
                name="school1"
                type="text"
                placeholder="School"
                // value={formData.schoolName}
                // onChange={handleChange}
                required
              />
            <Input
                name="schoolcity1"
                type="text"
                placeholder="City"
                // value={formData.schoolLocation}
                // onChange={handleChange}
                required
              />
              <Input
                name="schoolstate1"
                type="text"
                placeholder="State"
                // value={formData.schoolLocation}
                // onChange={handleChange}
                required
              />

            </Label>

            <Label className="text-xl whitespace-nowrap">
            <Input
                name="degree1"
                type="text"
                placeholder="Degree"
                // value={formData.degree}
                // onChange={handleChange}
                required
              />
              <Input
                name="field1"
                type="text"
                placeholder="Field"
                // value={formData.degree}
                // onChange={handleChange}
                required
              />
            <Input
                name="schoolstatedate1"
                type="text"
                placeholder="mon year"
                // value={formData.schoolDates}
                // onChange={handleChange}
                required
              />
              <Input
                name="schoolenddate1"
                type="text"
                placeholder="mon year"
                // value={formData.schoolDates}
                // onChange={handleChange}
                required
              />
            </Label>
            School #2
            <Label className="text-xl whitespace-nowrap">
            <Input
                name="school2"
                type="text"
                placeholder="School"
                // value={formData.schoolName}
                // onChange={handleChange}
                required
              />
            <Input
                name="schoolcity2"
                type="text"
                placeholder="City"
                // value={formData.schoolLocation}
                // onChange={handleChange}
                required
              />
              <Input
                name="schoolstate2"
                type="text"
                placeholder="State"
                // value={formData.schoolLocation}
                // onChange={handleChange}
                required
              />

            </Label>

            <Label className="text-xl whitespace-nowrap">
            <Input
                name="degree2"
                type="text"
                placeholder="Degree"
                // value={formData.degree}
                // onChange={handleChange}
                required
              />
              <Input
                name="field2"
                type="text"
                placeholder="Field"
                // value={formData.degree}
                // onChange={handleChange}
                required
              />
            <Input
                name="schoolstatedate2"
                type="text"
                placeholder="mon year"
                // value={formData.schoolDates}
                // onChange={handleChange}
                required
              />
              <Input
                name="schoolenddate2"
                type="text"
                placeholder="mon year"
                // value={formData.schoolDates}
                // onChange={handleChange}
                required
              />
            </Label>

            <CardTitle className="text-center text-xl mt-5">Technical Skills</CardTitle>
            <CardTitle className="text-center text-md mt-1">Ranked 1-5 (beginner-expert) based on skill level</CardTitle>
            <Label className="text-xl whitespace-nowrap">
            <Input
                name="skill1"
                type="text"
                placeholder="Skill #1"
                // value={formData.skill1}
                // onChange={handleChange}
                required
              />
            <Input
                name="skill1level"
                type="number"
                placeholder="Experience Level (e.g. 1)"
                // value={formData.skillnum1}
                // onChange={handleChange}
                required
              />
            </Label>
            <Label className="text-xl whitespace-nowrap">
            <Input
                name="skill2"
                type="text"
                placeholder="Skill #2"
                // value={formData.skill2}
                // onChange={handleChange}
                required
              />
            <Input
                name="skill2level"
                type="number"
                placeholder="Experience Level (e.g. 1)"
                // value={formData.skillnum2}
                // onChange={handleChange}
                required
              />
            </Label>
            <Label className="text-xl whitespace-nowrap">
            <Input
                name="skill3"
                type="text"
                placeholder="Skill #3"
                // value={formData.skill3}
                // onChange={handleChange}
                required
              />
            <Input
                name="skill3level"
                type="number"
                placeholder="Experience Level (e.g. 1)"
                // value={formData.skillnum3}
                // onChange={handleChange}
                required
              />
            </Label>
            <Label className="text-xl whitespace-nowrap">
            <Input
                name="skill4"
                type="text"
                placeholder="Skill #4"
                // value={formData.skill4}
                // onChange={handleChange}
                required
              />
            <Input
                name="skill4level"
                type="number"
                placeholder="Experience Level (e.g. 1)"
                // value={formData.skillnum4}
                // onChange={handleChange}
                required
              />
            </Label>
            <CardTitle className="text-center text-xl mt-5">Projects</CardTitle>
            Project #1
            <Label className="text-xl whitespace-nowrap">
              <Input
                name="project1"
                type="text"
                placeholder="Project Title"
                // value={formData.projecttitle1}
                // onChange={handleChange}
                required
            />  
              <Input
                name="project1link"
                type="url"
                placeholder="Project URL"
                // value={formData.projectlink1}
                // onChange={handleChange}
                required
            />  
            </Label>

            Project #2
            <Label className="text-xl whitespace-nowrap">
              <Input
                name="project2"
                type="text"
                placeholder="Project Title"
                // value={formData.projecttitle2}
                // onChange={handleChange}
                required
            />  
              <Input
                name="project2link"
                type="url"
                placeholder="Project URL"
                // value={formData.projectlink2}
                // onChange={handleChange}
                required
            />  
            </Label>
            <CardFooter>
              <Button className="w-full h-10 text-md mt-5" type="submit">Build Your Resume</Button>
            </CardFooter>
        </form>
        </CardContent>
        </Card>
      </div>

    )
}
