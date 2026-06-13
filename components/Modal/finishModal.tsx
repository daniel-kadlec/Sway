import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaTrophy } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

import { useModal } from "@/context/ModalContext";
import Button from "@/components/button";

type FinishModalProps = {
    data: any;
};

const lostReasons = ["GHOSTED", "REJECTED", "NO_BUDGET", "NO_RESPONSE", "OTHER"];

export default function FinishModal({ data }: FinishModalProps) {
    const { closeModal, openModal } = useModal();

    const [result, setResult] = useState<"WON" | "LOST" | null>(null);
    const [lostReason, setLostReason] = useState<string | null>(null);

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
                        setResult("WON");
                        setLostReason(null);
                    }}
                    className={`rounded-2xl border-2 p-8 flex flex-col items-center gap-4 transition cursor-pointer ${
                        result === "WON"
                            ? "border-primary bg-primary-light"
                            : "border-gray-200 hover:border-primary"
                    }`}
                >
                    <FaTrophy className="size-10 text-primary" />
                    <span className="text-3xl font-semibold">Won</span>
                </button>

                <button
                    type="button"
                    onClick={() => setResult("LOST")}
                    className={`rounded-2xl border-2 p-8 flex flex-col items-center gap-4 transition cursor-pointer ${
                        result === "LOST"
                            ? "border-primary bg-primary-light"
                            : "border-gray-200 hover:border-primary"
                    }`}
                >
                    <FaXmark className="size-10 text-primary" />
                    <span className="text-3xl font-semibold">Lost</span>
                </button>
            </div>

            {result === "LOST" && (
                <div className="mt-8">
                    <h3 className="text-2xl font-semibold mb-4">Reason</h3>

                    <div className="flex flex-col gap-3">
                        {lostReasons.map((reason) => (
                            <button
                                key={reason}
                                type="button"
                                onClick={() => setLostReason(reason)}
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

                <Button onClickAction={() => {}}>
                    Save
                </Button>
            </div>
        </>
    );
}