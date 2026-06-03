import Button from "@/components/button";
import {TbReload} from "react-icons/tb";

export default function ResetLead(){
    return(
        <Button destructive={true} className={'icon-button w-full bg-error-light! text-error!'}>
            <TbReload className={'mt-0.5'}/>
            Reset
        </Button>
    );
}