import Button from "@/components/button";
import {FaFlagCheckered} from "react-icons/fa";
import {useModal} from "@/context/ModalContext";

type FinishLeadProps = {
    data: any;
}

export default function FinishLead({data}: FinishLeadProps){
    const {openModal} = useModal()
    return(
        <Button onClickAction={()=> openModal('finish', data)} className={'icon-button w-full bg-success-light! text-success!'}>
            <FaFlagCheckered className={'mt-0.5'}/>
            Finish
        </Button>
    );
}