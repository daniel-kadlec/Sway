import Button from "@/components/button";
import {FaFlagCheckered} from "react-icons/fa";
import {useModal} from "@/context/ModalContext";

export default function FinishLead(){
    const {openModal} = useModal()
    return(
        <Button onClickAction={()=> openModal('finish')} className={'icon-button w-full bg-success-light! text-success!'}>
            <FaFlagCheckered className={'mt-0.5'}/>
            Finish
        </Button>
    );
}