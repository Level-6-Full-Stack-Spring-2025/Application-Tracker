import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import AddingSelections from "./AddingSelections"

export default function ResumeBuilderForm() {
    
    return(
        <Card className="flex w-full shadow-lg bg-card text-white font-lalezar">
        <CardHeader>
            <CardTitle className="text-center text-2xl">Build Your Resume</CardTitle>
        </CardHeader>
        <CardContent>
        <form className="w-full space-y-2 text-center">
        <CardTitle className="text-center text-xl">Contact Information</CardTitle>

            <Label className="text-xl whitespace-nowrap">
              First Name:
              <Input
                  name="fname"
                  type="text"
                  placeholder="First Name"
                  //value=
                  required
                  className="placeholder-white text-white"
              />
            </Label>
            <Label className="text-xl whitespace-nowrap">
              Last Name:
              <Input
                className="text-white placeholder: text-white"
                name="lname"
                type="text"
                placeholder="Last Name"
                //value=
                required
            />
            </Label>
            <Label className="text-xl whitespace-nowrap">
              Email:
              <Input
                className="text-white placeholder: text-white"
                name="email"
                type="email"
                placeholder="Email"
                //value=
                required
            />    
            </Label>
            <Label className="text-xl whitespace-nowrap">
              Phone Number:
              <Input
                className="text-white placeholder: text-white"
                name="phone"
                type="tel"
                placeholder="Phone Number"
                //value=
                required
            />
            </Label>

            <Label className="text-xl whitespace-nowrap">
              Github URL (if applicable):
              <Input
                className="text-white placeholder: text-white"
                name="github"
                type="url"
                placeholder="Github"
                //value=
            />   
            </Label>

            <Label className="text-xl whitespace-nowrap">
              LinkedIn URL (if applicable):
              <Input
                className="text-primary placeholder: text-primary"
                name="linkedin"
                type="url"
                placeholder="LinkedIn"
                //value=
            />  
            </Label>

            <CardTitle className="text-center text-xl mt-5">Technical Skills</CardTitle>
            <AddingSelections buttonText="Add more skills" limit={4}/>
            
            <Label className="text-xl whitespace-nowrap">
              LinkedIn URL (if applicable):
              <Input
                className="text-primary placeholder: text-primary"
                name="linkedin"
                type="url"
                placeholder="LinkedIn"
                //value=
            />  
            </Label>
            <Button className="w-full text-md mt-3">Build Your Resume</Button>
        </form>
        </CardContent>
        </Card>
    )
}
