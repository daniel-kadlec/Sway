"use client";

import { createContext, useContext, useState } from "react";

type ModalType = "create" | "edit" | "view" | "finish" | null;

type ModalState = {
    isOpen: boolean;
    type: ModalType;
    data?: any;
};

type ModalContextType = {
    modal: ModalState;
    openModal: (type: ModalType, data?: any) => void;
    closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
    const [modal, setModal] = useState<ModalState>({
        isOpen: false,
        type: null,
        data: null,
    });

    const openModal = (type: ModalType, data?: any) => {
        setModal({
            isOpen: true,
            type,
            data,
        });
    };

    const closeModal = () => {
        setModal({
            isOpen: false,
            type: null,
            data: null,
        });
    };

    return (
        <ModalContext.Provider value={{ modal, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error("useModal must be used inside ModalProvider");
    }

    return context;
}