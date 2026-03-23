import { useState } from "react";
import {useModal} from "@/app/Context/ModalContext";
import { IoClose } from "react-icons/io5";
import { Label, Input, Select } from "./inputs";
import Button from "@/app/components/button";

type CreateModalProps = {
    data?: any;
};

export default function CreateModal({ data }: CreateModalProps) {
    const [advanced, setAdvanced] = useState(false);
    const { closeModal } = useModal();


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="w-full rounded-3xl bg-white shadow-xl p-16 relative max-w-[1000px]">

                {/* Header */}
                <div className="flex items-center justify-between mb-8 border-b border-lightgray pb-10">
                    <h2 className="text-5xl font-bold text-primary">
                        Create a new lead
                    </h2>

                    <button
                        onClick={() => closeModal()}
                        className="size-14 flex items-center justify-center rounded-full bg-primary-light transition cursor-pointer"
                    >
                       <IoClose className={'text-primary size-10'}/>
                    </button>
                </div>

                {/* Advanced toggle */}
                <div className="flex justify-end">
                    <label className="flex items-center gap-3 text-2xl cursor-pointer font-bold">
                        <input
                            className={'size-6'}
                            type="checkbox"
                            checked={advanced}
                            onChange={() => setAdvanced(!advanced)}
                        />
                        Advanced mode
                    </label>
                </div>

                {/* Form */}
                <div className="grid grid-cols-2 gap-8">

                    {/* Company */}
                    <div className="col-span-2">
                        <Label>Company name</Label>
                        <Input placeholder="Velká firma" />
                    </div>

                    {/* Primary */}
                    <div>
                        <Label>Primary contact</Label>
                        <Input placeholder="E-mail, IG, phone" />
                    </div>

                    <div>
                        <Label>Primary platform</Label>
                        <Select />
                    </div>

                    {/* Website + date */}
                    <div>
                        <Label>Website (optional)</Label>
                        <Input placeholder="youtube.com" />
                    </div>

                    <div>
                        <Label>Contact date (optional)</Label>
                        <Input placeholder="7.7.2027" />
                    </div>

                    {advanced && (
                        <>
                            <div>
                                <Label>Secondary contact</Label>
                                <Input placeholder="E-mail, IG, phone" />
                            </div>

                            <div>
                                <Label>Secondary platform</Label>
                                <Select />
                            </div>

                            <div className="col-span-2">
                                <Label>Note</Label>
                                <textarea
                                    className="w-full min-h-[150px] rounded-xl border border-lightgray px-8 py-5 text-2xl focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Poznámka..."
                                />
                            </div>
                        </>
                    )}
                </div>

                <div className="flex justify-end gap-3 mt-10">
                    <Button className={'bg-primary-light! text-primary!'}>
                        Save & Next
                    </Button>
                    <Button>
                        Save
                    </Button>
                </div>
            </div>
        </div>
    );
}

