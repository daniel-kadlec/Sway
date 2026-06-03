import Button from "@/components/button";
import {FaClock} from "react-icons/fa";

export default function SetPendingLead() {
    return(
        <Button destructive={true} className={'icon-button w-full bg-warning-light! text-warning!'}>
            <FaClock className={'mt-0.5'}/>
            Pending
        </Button>
    );
}