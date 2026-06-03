import Button from "@/components/button";
import {FaForward} from "react-icons/fa";

export default function RollbackLead(){
    return(
        <Button destructive={true} className={'icon-button w-full bg-lightgray! text-darkgray!'}>
            <FaForward className={'mt-0.5 rotate-180'}/>
            Go back
        </Button>
    )
}