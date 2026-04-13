import { useState } from "react";
import {useModal} from "@/app/context/ModalContext";
import { IoClose } from "react-icons/io5";
import { Label, Input, Select } from "./inputs";
import Button from "@/app/components/button";
import {useToast} from "@/app/context/ToastContext";

type CreateModalProps = {
    data?: any;
};

export default function CreateModal({ data }: CreateModalProps) {
    const [advanced, setAdvanced] = useState(false);
    const { closeModal } = useModal();
    const { showToast } = useToast();

    const [form, setForm] = useState({
        companyName: "",
        primaryContactValue: "",
        primaryPlatform: "INSTAGRAM",
        website: "",
        contactDate: "",
        secondaryContactValue: "",
        secondaryPlatform: "EMAIL",
        note: "",
    });

    const handleInputChange = (field: string, value: string) => {
        setForm((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleLeadCreate = async () => {
        try {
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (!res.ok) throw new Error();

            showToast("Lead created successfully", "", "success");
            closeModal();
        } catch (err) {
            showToast("Failed to create lead", "", "error");
        }
    };

    return (
        <div className="">

            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-4xl font-bold text-primary">
                    Create a new lead
                </h2>

                <button
                    onClick={() => closeModal()}
                    className="size-12 flex items-center justify-center rounded-full bg-primary-light transition cursor-pointer hover:opacity-90"
                >
                   <IoClose className={'text-primary size-8'}/>
                </button>
            </div>

            {/* Advanced toggle */}
            <div className="flex justify-end">
                <label className="flex items-center gap-2 text-xl cursor-pointer font-bold">
                    <input
                        className={'size-5'}
                        type="checkbox"
                        checked={advanced}
                        onChange={() => setAdvanced(!advanced)}
                    />
                    Advanced mode
                </label>
            </div>

            <div className="grid grid-cols-2 gap-8">

                <div className="col-span-2">
                    <Label>Company name<span className={'required'}/></Label>
                    <Input onChange={(e) => handleInputChange("companyName", e.target.value)} placeholder="XS Drink" />
                </div>

                <div>
                    <Label>Primary contact<span className={'required'}/></Label>
                    <Input onChange={(e) => handleInputChange("primaryContactValue", e.target.value)} placeholder="E-mail, IG, phone" />
                </div>

                <div>
                    <Label>Primary platform<span className={'required'}/></Label>
                    <Select value={form.primaryPlatform}
                            onChange={(e) =>
                                handleInputChange("primaryPlatform", e.target.value)
                            }/>
                </div>

                <div>
                    <Label>Website</Label>
                    <Input onChange={(e) => handleInputChange("website", e.target.value)} placeholder="youtube.com" />
                </div>

                <div>
                    <Label>Contact date</Label>
                    <Input
                        type="date"
                        value={form.contactDate}
                        onChange={(e) => handleInputChange("contactDate", e.target.value)} placeholder="7.7.2027" />
                </div>

                {advanced && (
                    <>
                        <div>
                            <Label>Secondary contact</Label>
                            <Input onChange={(e) => handleInputChange("secondaryContactValue", e.target.value)} placeholder="E-mail, IG, phone" />
                        </div>

                        <div>
                            <Label>Secondary platform</Label>
                            <Select value={form.secondaryPlatform}
                                    onChange={(e) =>
                                        handleInputChange("secondaryPlatform", e.target.value)
                                    }/>
                        </div>

                        <div className="col-span-2">
                            <Label>Note</Label>
                            <textarea
                                className="w-full min-h-[100px] rounded-xl border border-lightgray px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Company smells weird... And there is smoke coming out of it!"
                                onChange={(e) => handleInputChange("note", e.target.value)}
                            />
                        </div>
                    </>
                )}
            </div>

            <div className="flex justify-end gap-3 mt-10">
                <Button className={'bg-primary-light! text-primary!'}>
                    Create & Next
                </Button>
                <Button onClick={handleLeadCreate}>
                    Create
                </Button>
            </div>
        </div>
    );
}

