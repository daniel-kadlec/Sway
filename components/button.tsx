"use client";

import { useRef, useState } from "react";

type ButtonProps = {
    children: React.ReactNode;
    onClickAction?: () => void;
    className?: string;
    type?: "submit" | "reset" | "button";
    destructive?: boolean;
};

export default function Button({
                                   children,
                                   onClickAction,
                                   className,
                                   type = "button",
                                   destructive = false,
                               }: ButtonProps) {
    const [holding, setHolding] = useState(false);

    const holdTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    function handleClick() {
        if (!destructive) {
            onClickAction?.();
        }
    }

    function startHold() {
        if (!destructive) return;

        setHolding(true);

        holdTimeoutRef.current = setTimeout(() => {
            onClickAction?.();
            setHolding(false);
        }, 1000); // hold duration
    }

    function stopHold() {
        setHolding(false);

        if (holdTimeoutRef.current) {
            clearTimeout(holdTimeoutRef.current);
            holdTimeoutRef.current = null;
        }
    }

    return (
        <button
            type={type}
            onClick={handleClick}
            onMouseDown={startHold}
            onMouseUp={stopHold}
            onMouseLeave={stopHold}
            onTouchStart={startHold}
            onTouchEnd={stopHold}
            className={`bg-primary text-white px-6 py-2 rounded-xl text-lg transition duration-300 hover:bg-primary-dark min-w-[110px] cursor-pointer hover:opacity-80
                ${destructive ? "bg-red-500 hover:bg-red-600 hover:opacity-100!" : ""}
                ${holding ? "scale-[0.98]" : ""}
                ${className}
            `}
        >
            {holding ? "Hold" : children}
        </button>
    );
}