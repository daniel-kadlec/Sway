import { useModal } from "@/context/ModalContext";
import { useToast } from "@/context/ToastContext";
import { IoClose } from "react-icons/io5";
import { FaTrash, FaPen } from "react-icons/fa";
import { useState } from "react";

import { Label, Input, Select } from "./inputs";
import Button from "@/components/button";

import { deleteLead, updateLead } from "@/lib/utils/data/leads";

type EditModalProps = {
    data: any;
};

export default function EditModal({ data }: EditModalProps) {
    const { closeModal, openModal } = useModal();
    const { showToast } = useToast();

    const [form, setForm] = useState({
        companyName: data.companyName || "",
        primaryContactValue: data.primaryContactValue || "",
        primaryPlatform: data.primaryPlatform as string | null,
        website: data.website || "",
        contactDate: data.nextActionAt
            ? new Date(data.nextActionAt).toISOString().split("T")[0]
            : "",
        secondaryContactValue: data.secondaryContactValue || "",
        secondaryPlatform: data.secondaryPlatform as string | null,
        note: data.note || "",
    });

    const handleInputChange = (field: string, value: string | null) => {
        setForm((prev) => ({
            ...prev,
            [field]: value === "" ? null : value,
        }));
    };
    const handleDelete = async () => {
        try {
            await deleteLead(data.id);

            closeModal();

            showToast("Lead deleted successfully", "", "success");
        } catch {
            showToast("Error deleting lead", "", "error");
        }
    };

    const handleUpdate = async () => {
        try {
            await updateLead(data.id, form);

            showToast("Lead updated successfully", "", "success");

            openModal("view", {
                ...data,
                ...form,
                nextActionAt: form.contactDate,
            });
        } catch (err) {
            console.log(err)
            showToast("Failed to update lead", err instanceof Error ? err.message : "Unknown error", "error");
        }
    };

    return (
        <div className="">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-4xl font-bold text-primary">
                    Edit lead
                </h2>

                <button
                    onClick={() => closeModal()}
                    className="size-12 flex items-center justify-center rounded-full bg-primary-light transition cursor-pointer hover:opacity-90"
                >
                    <IoClose className={'text-primary size-8'} />
                </button>
            </div>

            <div className="grid grid-cols-2 gap-8">
                <div className="col-span-2">
                    <Label>Company name<span className={'required'} /></Label>
                    <Input value={form.companyName} onChange={(e) => handleInputChange("companyName", e.target.value)} placeholder="Enter company name" />
                </div>

                <div>
                    <Label>Primary contact<span className={''} /></Label>
                    <Input value={form.primaryContactValue} onChange={(e) => handleInputChange("primaryContactValue", e.target.value)} placeholder="E-mail, Instagram, or phone" />
                </div>

                <div>
                    <Label>Primary platform<span className={''} /></Label>
                    <Select value={form.primaryPlatform ?? ""} onChange={(e) => handleInputChange("primaryPlatform", e.target.value)} />
                </div>

                <div>
                    <Label>Website</Label>
                    <Input value={form.website} onChange={(e) => handleInputChange("website", e.target.value)} placeholder="company.com" />
                </div>

                <div>
                    <Label>Contact date</Label>
                    <Input type="date" value={form.contactDate} onChange={(e) => handleInputChange("contactDate", e.target.value)} placeholder="7.7.2027" />
                </div>

                <div>
                    <Label>Secondary contact</Label>
                    <Input value={form.secondaryContactValue} onChange={(e) => handleInputChange("secondaryContactValue", e.target.value)} placeholder="E-mail, Instagram, or phone" />
                </div>

                <div>
                    <Label>Secondary platform</Label>
                    <Select value={form.secondaryPlatform ?? ""} onChange={(e) => handleInputChange("secondaryPlatform", e.target.value)} />
                </div>

                <div className="col-span-2">
                    <Label>Note</Label>

                    <textarea
                        value={form.note}
                        className="w-full min-h-[100px] rounded-xl border border-lightgray px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Add notes, context, or follow-up details"
                        onChange={(e) => handleInputChange("note", e.target.value)}
                    />
                </div>
            </div>

            <div className="flex justify-between gap-3 mt-10">
                <div className="flex gap-3">
                    <Button destructive={true} className={'icon-button text-error! bg-error-light!'} onClickAction={handleDelete}>
                        <FaTrash className="size-4" />
                        Delete
                    </Button>

                    <Button className={'bg-primary-light! text-primary! flex items-center gap-2'} onClickAction={() => openModal("view", data)}>
                        <FaPen/>
                        Cancel
                    </Button>
                </div>

                <Button onClickAction={handleUpdate}>
                    Save
                </Button>
            </div>
        </div>
    );
}