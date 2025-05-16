import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ResumeBuilderForm() {
    
    return(
      <div className="flex justify-center w-full">
        <Card className="flex w-200 shadow-lg bg-card text-white font-lalezar">
        <CardHeader>
            <CardTitle className="text-center text-2xl">Build Your Resume</CardTitle>
        </CardHeader>
        <CardContent>
        <form className="w-full space-y-2 text-center">
        <CardTitle className="text-center text-xl">Contact Information</CardTitle>

            <Label className="text-md whitespace-nowrap">
              First Name:
              <Input
                  name="fname"
                  type="text"
                  placeholder="First Name"
                  //value=
                  required
              />
            </Label>
            <Label className="text-md whitespace-nowrap">
              Last Name:
              <Input
                name="lname"
                type="text"
                placeholder="Last Name"
                //value=
                required
            />
            </Label>
            <Label className="text-md whitespace-nowrap">
              Email:
              <Input
                name="email"
                type="email"
                placeholder="Email"
                //value=
                required
            />    
            </Label>
            <Label className="text-md whitespace-nowrap">
              Phone Number:
              <Input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                //value=
                required
            />
            </Label>

            <Label className="text-md whitespace-nowrap">
              Github URL:
              <Input
                name="github"
                type="url"
                placeholder="Github"
                //value=
                required
            />   
            </Label>

            <Label className="text-md whitespace-nowrap">
              LinkedIn URL:
              <Input
                name="linkedin"
                type="url"
                placeholder="LinkedIn"
                //value=
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
                //value=
                required
            />  
              <Input
                name="jobLocation1"
                type="text"
                placeholder="City, State"
                //value=
                required
            />  
            </Label>

            <Label className="text-xl whitespace-nowrap">
            <Input
                name="title1"
                type="text"
                placeholder="Title"
                //value=
                required
            />  
              <Input
                name="dates1"
                type="text"
                placeholder="mm/yyyy - mm/yyyy"
                //value=
                required
            />  
            </Label>
            
            <Label className="text-xl whitespace-nowrap">
            <Input
                name="description1"
                type="text"
                placeholder="Description"
                //value=
                required
              />
            <Input
                name="description2"
                type="text"
                placeholder="Description"
                //value=
                required
              />
            </Label>
            
            Experience #2
            <Label className="text-xl whitespace-nowrap">
              <Input
                name="company2"
                type="text"
                placeholder="Company"
                //value=
                required
            />  
              <Input
                name="jobLocation2"
                type="text"
                placeholder="City, State"
                //value=
                required
            />  
            </Label>

            <Label className="text-xl whitespace-nowrap">
            <Input
                name="title2"
                type="text"
                placeholder="Title"
                //value=
                required
            />  
              <Input
                name="dates2"
                type="text"
                placeholder="mm/yyyy - mm/yyyy"
                //value=
                required
            />  
            </Label>
            
            <Label className="text-xl whitespace-nowrap">
            <Input
                name="description3"
                type="text"
                placeholder="Description"
                //value=
                required
              />
            <Input
                name="description4"
                type="text"
                placeholder="Description"
                //value=
                required
              />
            </Label>

            <CardTitle className="text-center text-xl mt-5">Education</CardTitle>

            <Label className="text-xl whitespace-nowrap">
            <Input
                name="schoolname"
                type="text"
                placeholder="School"
                //value=
                required
              />
            <Input
                name="schoolLocation"
                type="text"
                placeholder="City, State"
                //value=
                required
              />
            </Label>

            <Label className="text-xl whitespace-nowrap">
            <Input
                name="degree"
                type="text"
                placeholder="Degree, Field"
                //value=
                required
              />
            <Input
                name="schoolDates"
                type="text"
                placeholder="mm/yyyy - mm/yyyy"
                //value=
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
                //value=
                required
              />
            <Input
                name="skillnum1"
                type="number"
                placeholder="Experience Level (e.g. 1)"
                //value=
                required
              />
            </Label>
            <Label className="text-xl whitespace-nowrap">
            <Input
                name="skill2"
                type="text"
                placeholder="Skill #2"
                //value=
                required
              />
            <Input
                name="skillnum2"
                type="number"
                placeholder="Experience Level (e.g. 1)"
                //value=
                required
              />
            </Label>
            <Label className="text-xl whitespace-nowrap">
            <Input
                name="skill3"
                type="text"
                placeholder="Skill #3"
                //value=
                required
              />
            <Input
                name="skillnum3"
                type="number"
                placeholder="Experience Level (e.g. 1)"
                //value=
                required
              />
            </Label>
            <Label className="text-xl whitespace-nowrap">
            <Input
                name="skill4"
                type="text"
                placeholder="Skill #4"
                //value=
                required
              />
            <Input
                name="skillnum4"
                type="number"
                placeholder="Experience Level (e.g. 1)"
                //value=
                required
              />
            </Label>
            <CardTitle className="text-center text-xl mt-5">Projects</CardTitle>
            Project #1
            <Label className="text-xl whitespace-nowrap">
              <Input
                name="projecttitle1"
                type="text"
                placeholder="Project Title"
                //value=
                required
            />  
              <Input
                name="projectlink1"
                type="url"
                placeholder="Project URL"
                //value=
                required
            />  
            </Label>

            Project #2
            <Label className="text-xl whitespace-nowrap">
              <Input
                name="projecttitle2"
                type="text"
                placeholder="Project Title"
                //value=
                required
            />  
              <Input
                name="projectlink2"
                type="url"
                placeholder="Project URL"
                //value=
                required
            />  
            </Label>
            <CardFooter>
              <Button className="w-full text-md mt-3">Build Your Resume</Button>
            </CardFooter>
        </form>
        </CardContent>
        </Card>
      </div>

    )
}
