import Button from "@/components/button";
import { FaClock } from "react-icons/fa";
import { setPendingLead } from "@/lib/utils/data/leadStage";
import { useToast } from "@/context/ToastContext";

type SetPendingLeadProps = {
    id: string;
};

export default function SetPendingLead({ id }: SetPendingLeadProps) {
    const { showToast } = useToast();

    return (
        <Button
            destructive={true}
            className="icon-button w-full bg-warning-light! text-warning!"
            onClickAction={async () => {
                try {
                    await setPendingLead(id);
                    showToast("Lead marked as pending", "", "success");
                } catch (err: unknown) {
                    const message =
                        err instanceof Error ? err.message : String(err);

                    showToast("Error", message, "error");
                }
            }}
        >
            <FaClock className="mt-0.5" />
            Pending
        </Button>
    );
}