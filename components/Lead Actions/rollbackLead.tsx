import Button from "@/components/button";
import {FaForward} from "react-icons/fa";
import {rollbackLead} from "@/lib/utils/data/leadStage";
import {useToast} from "@/context/ToastContext";

type RollbackLeadProps = {
    id: string;
}

export default function RollbackLead({id}:RollbackLeadProps){
    const {showToast} = useToast()
    return(
        <Button destructive={true} className={'icon-button w-full bg-lightgray! text-darkgray!'}
                onClickAction={async () => {
                    try {
                        await rollbackLead(id)
                        showToast("Stage rolled back", "", "success");
                    }
                    catch (err: unknown) {
                        const message =
                            err instanceof Error ? err.message : String(err);

                        showToast("Error", message, "error");
                    }
                }}>
            <FaForward className={'mt-0.5 rotate-180'}/>
            Go back
        </Button>
    )
}