"use client";

import {useModal} from "@/context/ModalContext";
import CreateModal from "@/components/Modal/createModal";
import EditModal from "@/components/Modal/editModal";
import ViewModal from "@/components/Modal/viewModal";
import FinishModal from "@/components/Modal/finishModal";
import SettingsModal from "@/components/Modal/settingsModal";
import {AnimatePresence, motion} from "motion/react";


const MODAL_COMPONENTS = {
    create: CreateModal,
    edit: EditModal,
    view: ViewModal,
    finish: FinishModal,
    settings: SettingsModal
};


export default function ModalShell() {
    const { modal, closeModal } = useModal();

    const Component = MODAL_COMPONENTS[modal.type!];

    // Only close if the click is directly on the overlay
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <AnimatePresence>
            {modal.isOpen && Component && (
                <motion.div onClick={handleOverlayClick} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.15 } }}
                        exit={{ opacity: 0,  transition: { duration: 0.15 } }}>
                <div className="modal-container">
                    {Component && <Component data={modal.data} />}
                </div>
            </motion.div>
            )}
        </AnimatePresence>

    );
}