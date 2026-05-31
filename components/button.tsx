"use client";

import { useEffect, useState } from "react";
import {useToast} from "@/context/ToastContext";

type ButtonProps = {
    children: React.ReactNode;
    onClickAction?: () => void;
    className?: string;
    type?: "submit" | "reset" | "button";
    destructive?: boolean;
};

export default function Button({children, onClickAction, className, type = "button", destructive = false}: ButtonProps) {

    const [armed, setArmed] = useState(false);
    const [cooldown, setCooldown] = useState(false);

    const {showToast} = useToast();

    useEffect(() => {
        if (!armed) return;

        const timeout = setTimeout(() => {
            setArmed(false);
            setCooldown(false);
        }, 3000);

        return () => clearTimeout(timeout);
    }, [armed]);

    function handleClick() {

        // normal buttopn
        if (!destructive) {
            onClickAction?.();
            return;
        }

        // first click
        if (!armed) {
            setArmed(true);
            showToast("Are you sure?", "This action is irreversible.", "warning");

            // Small anti-doubleclick delay
            setCooldown(true);

            setTimeout(() => {
                setCooldown(false);
            }, 1000);

            return;
        }

        // ignore spam during cooldown
        if (cooldown) return;

        onClickAction?.();

        setArmed(false);
    }

    return (
        <button
            onClick={handleClick}
            disabled={cooldown}
            type={type}
            className={`bg-primary text-white px-6 py-2 rounded-xl text-lg transition duration-300 hover:bg-primary-dark min-w-[110px] cursor-pointer hover:opacity-80
                ${armed ? "bg-red-500 hover:bg-red-600 hover:opacity-100!" : ""}
                ${cooldown ? "bg-gray-200! text-offblack! hover:opacity-100! cursor-not-allowed!" : ""}

                ${className}
            `}
        >
            {armed ? "Click again" : children}
        </button>
    );
}