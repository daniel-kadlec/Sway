"use client";

import { createContext, useContext, useState } from "react";
import ToastContainer from "@/app/components/toastContainer";

type ToastType = {
    id: string;
    message: string;
    description?: string;
};

type ToastContextType = {
    toasts: ToastType[];
    showToast: (message: string, description?: string) => void;
    removeToast: (id: string) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const [toasts, setToasts] = useState<ToastType[]>([]);

    function showToast(message: string, description?:string) {
        const id = crypto.randomUUID();

        setToasts((prev) => [...prev, { id, message, description }]);

        setTimeout(() => {
            removeToast(id);
        }, 3000);
    }

    function removeToast(id: string) {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }

    return (
        <ToastContext.Provider value={{ toasts, showToast, removeToast }}>
            {children}

            <ToastContainer toasts={toasts} />
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);

    if (!context) {
        throw new Error("useToast must be used inside ToastProvider");
    }

    return context;
}