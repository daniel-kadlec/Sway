import {FaForward} from "react-icons/fa";
import {advanceLead} from "@/lib/utils/data/leadStage"
import {useToast} from "@/context/ToastContext";
import {useModal} from "@/context/ModalContext";

type AdvanceLeadProps = {
    id: string;
}
export default function AdvanceLeadButton({id}: AdvanceLeadProps){
    const {showToast} = useToast()
    const {openModal} = useModal()
    return(
        <button className="size-12 flex items-center justify-center rounded-full bg-primary-light transition cursor-pointer hover:opacity-90"
        onClick={async () => {
            try {
                const result = await advanceLead(id)
                if(result!.reachedClosed){
                    openModal("finish", {id})
                }
                else{
                    showToast("Stage advanced", "", "success");

                }

            }
            catch (err: unknown) {
                const message =
                    err instanceof Error ? err.message : String(err);

                showToast("Error", message, "error");
            }
        }}
        >
            <FaForward className="text-primary size-5 ml-1" />
        </button>
    );
}