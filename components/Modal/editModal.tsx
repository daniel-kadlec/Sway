import { useModal } from "@/context/ModalContext";
import { IoClose } from "react-icons/io5";
import { Label, Input, Select } from "./inputs";
import Button from "@/components/button";
import { FaTrash } from "react-icons/fa";
import { FaPen } from "react-icons/fa";

type editModalProps = {
    data: any;
};

export default function EditModal({ data }: editModalProps) {
    const { closeModal, openModal } = useModal();

    return (
            <>

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-4xl font-bold text-primary">
                        Edit lead
                    </h2>

                    <button
                        onClick={closeModal}
                        className="size-12 flex items-center justify-center rounded-full bg-primary-light hover:opacity-90 transition"
                    >
                        <IoClose className="text-primary size-8" />
                    </button>
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
                        <Input
                            placeholder="E-mail, IG, phone"
                        />
                    </div>

                    <div>
                        <Label>Primary platform</Label>
                        <Select />
                    </div>

                    {/* Website + date */}
                    <div>
                        <Label>Website (optional)</Label>
                        <Input
                            placeholder="youtube.com"
                        />
                    </div>

                    <div>
                        <Label>Contact date (optional)</Label>
                        <Input
                            placeholder="7.7.2027"
                        />
                    </div>

                    {/* Secondary */}
                    <div>
                        <Label>Secondary contact</Label>
                        <Input
                            placeholder="E-mail, IG, phone"
                        />
                    </div>

                    <div>
                        <Label>Secondary platform</Label>
                        <Select/>
                    </div>

                    {/* Note */}
                    <div className="col-span-2">
                        <Label>Note</Label>
                        <textarea
                            defaultValue={data?.note}
                            className="w-full min-h-[110px] rounded-xl border border-lightgray px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Poznámka..."
                        />
                    </div>
                </div>

                {/* Actions */}
                <div className="flex mt-12 justify-between">
                    <div className={'flex gap-6'}>
                        <Button className="!bg-error-light !text-error icon-button">
                            <FaTrash className="size-4" />
                            Delete
                        </Button>

                        <Button
                            className="!bg-primary-light !text-primary icon-button"
                            onClick={() => openModal("view", data)}
                        >
                            <FaPen className="size-4" />
                            Cancel
                        </Button>
                    </div>
                    <Button
                        onClick={() => openModal("view", data)}
                    >
                        Save
                    </Button>
                </div>
            </>
    );
}