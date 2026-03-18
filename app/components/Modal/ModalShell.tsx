"use client";

import {useModal} from "@/app/Context/ModalContext";

function CreateModal() {
    return <div>Create content</div>;
}

function EditModal() {
    return <div>Edit content</div>;
}

function ViewModal() {
    return <div>View content</div>;
}

const MODALS = {
    create: CreateModal,
    edit: EditModal,
    view: ViewModal,
};

export default function ModalShell() {
    const { modal, closeModal } = useModal();

    if (!modal.isOpen) return null;


    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded">


                <button onClick={closeModal} className={'cursor-pointer'}>Close</button>
            </div>
        </div>
    );
}