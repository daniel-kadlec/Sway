import Button from "@/components/button";
import {TbReload} from "react-icons/tb";
import {resetLead} from "@/lib/utils/data/leadStage";
import {useToast} from "@/context/ToastContext";

type ResetLeadProps = {
    id: string;
}

export default function ResetLead({id}:ResetLeadProps){
    const {showToast} = useToast()
    return(
        <Button destructive={true} className={'icon-button w-full bg-error-light! text-error!'}
                onClickAction={async () => {
                    try {
                        await resetLead(id)
                        showToast("Stage reset", "", "success");
                    }
                    catch (err: unknown) {
                        const message =
                            err instanceof Error ? err.message : String(err);

                        showToast("Error", message, "error");
                    }
                }}
        >
            <TbReload className={'mt-0.5'}/>
            Reset
        </Button>
    );
}