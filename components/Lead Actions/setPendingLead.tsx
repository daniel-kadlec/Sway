import Button from "@/components/button";
import { FaClock } from "react-icons/fa";
import { setPendingLead } from "@/lib/utils/data/leadStage";
import { useToast } from "@/context/ToastContext";
import {useState} from "react";

type SetPendingLeadProps = {
    id: string;
    status: string,
};

export default function SetPendingLead({ id, status }: SetPendingLeadProps) {
    const { showToast } = useToast();
    const [isPending, setIsPending] = useState(status === "PENDING");

    function handleStatusChange () {
        setIsPending(!isPending);
    }

    return (
        <Button
            className="icon-button w-full bg-warning-light! text-warning!"
            onClickAction={async () => {
                try {
                    await setPendingLead(id);
                    handleStatusChange()
                    showToast((isPending ? "Lead no longer pending" : "Lead marked as pending"), "", "success");
                } catch (err: unknown) {
                    const message =
                        err instanceof Error ? err.message : String(err);

                    showToast("Lead is inactive", message, "error");
                }
            }}
        >
            <FaClock className="mt-0.5" />
            {isPending? "Cancel pending" : "Set Pending"}
        </Button>
    );
}