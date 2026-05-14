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
        primaryPlatform: data.primaryPlatform || "INSTAGRAM",
        website: data.website || "",
        contactDate: data.nextActionAt
            ? new Date(data.nextActionAt).toISOString().split("T")[0]
            : "",
        secondaryContactValue: data.secondaryContactValue || "",
        secondaryPlatform: data.secondaryPlatform || "EMAIL",
        note: data.note || "",
    });

    const handleInputChange = (field: string, value: string) => {
        setForm((prev) => ({
            ...prev,
            [field]: value,
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
            showToast("Failed to update lead", "", "error");
        }
    };

    return (
        <>
            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
                <h2 className="text-4xl font-bold text-primary">
                    Edit lead
                </h2>

                <button
                    onClick={closeModal}
                    className="flex size-12 items-center justify-center rounded-full bg-primary-light transition hover:opacity-90"
                >
                    <IoClose className="size-8 text-primary" />
                </button>
            </div>

            {/* Form */}
            <div className="grid grid-cols-2 gap-8">
                <div className="col-span-2">
                    <Label>
                        Company name
                        <span className={"required"} />
                    </Label>

                    <Input
                        placeholder="Enter company name"
                        value={form.companyName}
                        onChange={(e) =>
                            handleInputChange(
                                "companyName",
                                e.target.value
                            )
                        }
                    />
                </div>

                <div>
                    <Label>
                        Primary contact
                        <span className={"required"} />
                    </Label>

                    <Input
                        placeholder="E-mail, Instagram, or phone"
                        value={form.primaryContactValue}
                        onChange={(e) =>
                            handleInputChange(
                                "primaryContactValue",
                                e.target.value
                            )
                        }
                    />
                </div>

                <div>
                    <Label>
                        Primary platform
                        <span className={"required"} />
                    </Label>

                    <Select
                        value={form.primaryPlatform}
                        onChange={(e) =>
                            handleInputChange(
                                "primaryPlatform",
                                e.target.value
                            )
                        }
                    />
                </div>

                <div>
                    <Label>Website</Label>

                    <Input
                        placeholder="company.com"
                        value={form.website}
                        onChange={(e) =>
                            handleInputChange(
                                "website",
                                e.target.value
                            )
                        }
                    />
                </div>

                <div>
                    <Label>Contact date</Label>

                    <Input
                        type="date"
                        value={form.contactDate}
                        onChange={(e) =>
                            handleInputChange(
                                "contactDate",
                                e.target.value
                            )
                        }
                    />
                </div>

                <div>
                    <Label>Secondary contact</Label>

                    <Input
                        placeholder="E-mail, Instagram, or phone"
                        value={form.secondaryContactValue}
                        onChange={(e) =>
                            handleInputChange(
                                "secondaryContactValue",
                                e.target.value
                            )
                        }
                    />
                </div>

                <div>
                    <Label>Secondary platform</Label>

                    <Select
                        value={form.secondaryPlatform}
                        onChange={(e) =>
                            handleInputChange(
                                "secondaryPlatform",
                                e.target.value
                            )
                        }
                    />
                </div>

                <div className="col-span-2">
                    <Label>Note</Label>

                    <textarea
                        className="min-h-[100px] w-full rounded-xl border border-lightgray px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Add notes, context, or follow-up details"
                        value={form.note}
                        onChange={(e) =>
                            handleInputChange(
                                "note",
                                e.target.value
                            )
                        }
                    />
                </div>
            </div>

            {/* Actions */}
            <div className="mt-12 flex justify-between">
                <div className={"flex gap-6"}>
                    <Button
                        onClick={handleDelete}
                        className="icon-button !bg-error-light !text-error"
                    >
                        <FaTrash className="size-4" />
                        Delete
                    </Button>

                    <Button
                        className="icon-button !bg-primary-light !text-primary"
                        onClick={() => openModal("view", data)}
                    >
                        <FaPen className="size-4" />
                        Cancel
                    </Button>
                </div>

                <Button onClick={handleUpdate}>
                    Save
                </Button>
            </div>
        </>
    );
}