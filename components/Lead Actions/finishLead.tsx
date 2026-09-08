import Button from "@/components/button";
import {FaFlagCheckered} from "react-icons/fa";
import {useModal} from "@/context/ModalContext";

type FinishLeadProps = {
    id: string;
    data?: unknown;
}

export default function FinishLead({id, data}: FinishLeadProps){
    const {openModal} = useModal()
    return(
        <Button onClickAction={()=> openModal('finish', data ?? {id})} className={'icon-button w-full bg-success-light! text-success!'}>
            <FaFlagCheckered className={'mt-0.5'}/>
            Finish
        </Button>
    );
}
