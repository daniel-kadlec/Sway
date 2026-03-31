"use client";

import {useModal} from "@/app/context/ModalContext";
import CreateModal from "@/app/components/Modal/createModal";
import EditModal from "@/app/components/Modal/editModal";
import ViewModal from "@/app/components/Modal/viewModal";
import FinishModal from "@/app/components/Modal/finishModal";


const MODAL_COMPONENTS = {
    create: CreateModal,
    edit: EditModal,
    view: ViewModal,
    finish: FinishModal,
};


export default function ModalShell() {
    const { modal, closeModal } = useModal();

    if (!modal.isOpen) return null;
    const Component = MODAL_COMPONENTS[modal.type!];

    // Only close if the click is directly on the overlay
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <div onClick={handleOverlayClick} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="modal-container">

                {Component && <Component data={modal.data} />}
            </div>
        </div>
    );
}