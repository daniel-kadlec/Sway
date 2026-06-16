import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaTrophy } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

import { useModal } from "@/context/ModalContext";
import { useToast } from "@/context/ToastContext";
import Button from "@/components/button";
import {finishLead} from "@/lib/utils/data/leadStage";
import {LeadLossReason} from "@/lib/generated/client";

type FinishModalProps = {
    data: any;
};

const lostReasons = ["GHOSTED", "REJECTED", "NO_BUDGET", "NO_RESPONSE", "OTHER"];

export default function FinishModal({ data }: FinishModalProps) {
    const { closeModal, openModal } = useModal();
    const { showToast} = useToast();

    const [outcome, setOutcome] = useState<"WON" | "LOST" | null>(null);
    const [lostReason, setLostReason] = useState<LeadLossReason | null>(null);

    const formatEnumText = (value: string) =>
        value
            .toLowerCase()
            .split("_")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

    return (
        <>
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-4xl font-bold text-primary">Finish lead</h2>

                <button
                    onClick={closeModal}
                    className="size-12 flex items-center justify-center rounded-full bg-primary-light transition cursor-pointer hover:opacity-90"
                >
                    <IoClose className="text-primary size-8" />
                </button>
            </div>

            <p className="text-2xl font-medium mb-6">How did this lead end?</p>

            <div className="grid grid-cols-2 gap-5">
                <button
                    type="button"
                    onClick={() => {
                        setOutcome("WON");
                        setLostReason(null);
                    }}
                    className={`rounded-2xl border-2 p-8 flex flex-col items-center gap-4 transition cursor-pointer ${
                        outcome === "WON"
                            ? "border-primary bg-primary-light"
                            : "border-gray-200 hover:border-primary"
                    }`}
                >
                    <FaTrophy className="size-10 text-primary" />
                    <span className="text-3xl font-semibold">Won</span>
                </button>

                <button
                    type="button"
                    onClick={() => setOutcome("LOST")}
                    className={`rounded-2xl border-2 p-8 flex flex-col items-center gap-4 transition cursor-pointer ${
                        outcome === "LOST"
                            ? "border-primary bg-primary-light"
                            : "border-gray-200 hover:border-primary"
                    }`}
                >
                    <FaXmark className="size-10 text-primary" />
                    <span className="text-3xl font-semibold">Lost</span>
                </button>
            </div>

            {outcome === "LOST" && (
                <div className="mt-8">
                    <h3 className="text-2xl font-semibold mb-4">Reason</h3>

                    <div className="flex flex-col gap-3">
                        {lostReasons.map((reason) => (
                            <button
                                key={reason}
                                type="button"
                                onClick={() => setLostReason(reason as LeadLossReason)}
                                className={`w-full rounded-xl border-2 px-5 py-4 text-left text-xl transition cursor-pointer ${
                                    lostReason === reason
                                        ? "border-primary bg-primary-light"
                                        : "border-gray-200 hover:border-primary"
                                }`}
                            >
                                {reason.charAt(0).toUpperCase() + reason.slice(1).toLowerCase().replaceAll("_", " ")}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            <div className="flex justify-end gap-4 mt-10">
                <Button className="bg-gray-100! text-black!" onClickAction={()=> {openModal("view", data)}}>
                    Cancel
                </Button>

                <Button
                    onClickAction={async () => {
                        try {
                            await finishLead(data.id, outcome!, lostReason!);

                            const formattedOutcome = formatEnumText(outcome!);

                            const description =
                                outcome === "LOST" && lostReason
                                    ? `Lead ${formattedOutcome}. ${formatEnumText(lostReason)}.`
                                    : `Lead ${formattedOutcome}.`;

                            showToast(
                                "Lead Closed",
                                description,
                                "success"
                            );

                            closeModal();
                        } catch (err) {
                            showToast(
                                "Failed to Close Lead",
                                "The lead could not be closed.",
                                "error"
                            );
                        }
                    }}
                >
                    Save
                </Button>
            </div>
        </>
    );
}