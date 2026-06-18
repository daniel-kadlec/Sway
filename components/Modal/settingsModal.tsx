import { IoClose } from "react-icons/io5";
import { useModal } from "@/context/ModalContext";
import Button from "@/components/button";
import { IoMdArrowRoundBack } from "react-icons/io";
import {updateSettings} from "@/lib/utils/settings/settings";
import { useRef } from "react";
import {useToast} from "@/context/ToastContext";


type SettingsModalProps = {
    data: {
        id: string;
        contactDelay: number;
        advanceFromBacklogDelay: number;
    };
};
export default function SettingsModal({data}: SettingsModalProps) {
    const { closeModal } = useModal();
    const { showToast } = useToast()
    const formRef = useRef<HTMLFormElement>(null);

    async function handleSubmit(formData: FormData) {
        try {
            await updateSettings(formData);
            closeModal();
            showToast("Settings updated", "", "success");
        }
        catch (err){
            console.log(err)
            showToast("Failed to update settings", err instanceof Error ? err.message : "Unknown error", "error");
        }
    }
    function handleReset(){
        try {
            formRef.current?.reset()
            showToast("Changes undone", "", "success");
        }
        catch (err){
            console.log(err)
            showToast("Failed to undo changes", err instanceof Error ? err.message : "Unknown error", "error");
        }
    }

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

            <form ref={formRef} action={handleSubmit}>
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
                            name="contactDelay"
                            type="number"
                            min={0}
                            defaultValue={data.contactDelay}
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
                            name="advanceFromBacklogDelay"
                            type="number"
                            min={0}
                            defaultValue={data.advanceFromBacklogDelay}
                            className="w-full rounded-lg border border-primary-light px-4 py-3"
                        />
                    </div>
                </div>

                <div className="flex justify-end gap-3 mt-10">
                    <Button destructive={true} type="button" onClickAction={() => handleReset() } className="bg-primary-light! text-primary! flex items-center gap-2"
                    >
                        <IoMdArrowRoundBack />
                        Undo Changes
                    </Button>

                    <Button type="submit">
                        Save
                    </Button>
                </div>
            </form>
        </div>
    );
}