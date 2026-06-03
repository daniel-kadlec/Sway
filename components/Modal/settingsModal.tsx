import { IoClose } from "react-icons/io5";
import { useModal } from "@/context/ModalContext";
import Button from "@/components/button";
import { IoMdArrowRoundBack } from "react-icons/io";

type SettingsModalProps = {
    settings: {
        ContactDelay: number;
        advanceFromBacklogDelay: number;
    };
};

export default function SettingsModal({ settings }: SettingsModalProps) {
    const { closeModal } = useModal();

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-4xl font-bold text-primary">
                    Settings
                </h2>

                <button
                    onClick={() => closeModal()}
                    className="size-12 flex items-center justify-center rounded-full bg-primary-light transition cursor-pointer hover:opacity-90"
                >
                    <IoClose className="text-primary size-8" />
                </button>
            </div>

            <div className="space-y-6">
                <div>
                    <label
                        htmlFor="contactDelay"
                        className="block text-sm font-medium mb-2"
                    >
                        Contact Delay (days)
                    </label>
                    <input
                        id="contactDelay"
                        type="number"
                        min={0}
                        defaultValue={0}
                        className="w-full rounded-lg border border-primary-light px-4 py-3"
                    />
                </div>

                <div>
                    <label
                        htmlFor="advanceFromBacklogDelay"
                        className="block text-sm font-medium mb-2"
                    >
                        Advance From Backlog Delay (days)
                    </label>
                    <input
                        id="advanceFromBacklogDelay"
                        type="number"
                        min={0}
                        defaultValue={0}
                        className="w-full rounded-lg border border-primary-light px-4 py-3"
                    />
                </div>
            </div>

            <div className="flex justify-end gap-3 mt-10">
                <Button
                    destructive={true}
                    className="bg-primary-light! text-primary! flex items-center gap-2"
                >
                    <IoMdArrowRoundBack />
                    Undo Changes
                </Button>

                <Button>
                    Save
                </Button>
            </div>
        </div>
    );
}