"use client";

import {useModal} from "@/app/Context/ModalContext";
import CreateModal from "@/app/components/Modal/createModal";
import EditModal from "@/app/components/Modal/editModal";
import ViewModal from "@/app/components/Modal/viewModal";


const MODAL_COMPONENTS = {
    create: CreateModal,
    edit: EditModal,
    view: ViewModal,
};


export default function ModalShell() {
    const { modal, closeModal } = useModal();

    if (!modal.isOpen) return null;
    const Component = MODAL_COMPONENTS[modal.type!];


    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded">

                {Component && <Component data={modal.data} />}

                <button onClick={closeModal} className={'cursor-pointer'}>Close</button>
            </div>
        </div>
    );
}