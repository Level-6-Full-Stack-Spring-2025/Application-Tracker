import { Badge } from "./badge";
import { Button } from "./button";

// add props for job title, company name, tags, etc.
export default function JobCard() {

    return(
        <div>
            <div className="flex flex-col items-start bg-card w-90 h-50 rounded-lg px-7 py-5 justify-start text-white">
                <h1 className="font-lalezar text-lg">AI Platform  Software Engineer Intern</h1>
                <p className="font-inter text-xs">@ DocuSign, Washington</p>
                <div className="pt-3 flex flex-row flex-wrap gap-1">
                    {/* TODO: create map type situation to loop through and create all badges/tags necessary for posting */}
                    <Badge variant={"urgent"}>Urgent</Badge>
                    <Badge variant={"progress"}>In-progress</Badge>
                    <Badge>Internship</Badge>
                    <Badge>$31-$38 /hr</Badge>
                    <Badge>Python</Badge>
                    <Badge>AI/ML</Badge>
                </div>
                {/* TODO: implement hover and look at what onclick redicrection looks like w/shadcn */}
                <div className="flex items-end justify-end flex-row gap-3 font-lalezar w-77 h-50">
                        <Button> Update </Button>
                        <Button> Apply </Button>
                </div>
            </div>
        </div>
    );
}