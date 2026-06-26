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
            className={`relative overflow-hidden text-white px-6 py-2 rounded-xl text-lg transition duration-300 min-w-[110px] cursor-pointer
                ${destructive ? "bg-red-500 hover:bg-red-600 hover:opacity-100!" : ""}
                ${holding ? "scale-[0.98]" : ""}
                ${!className?.includes("gradient") ? "bg-primary" : ""}
                ${className}
            `}
        >
            <div className={'h-full bg-gray-400/10 absolute inset-0 origin-left transition-all pointer-events-none'}
                 style={{
                     transform: holding ? "scaleX(1)" : "scaleX(0)",
                     transitionDuration: holding ? "1000ms" : "300ms",
                     transitionTimingFunction: holding ? "linear" : "ease-out",
                 }}/>
            {holding ? "Hold" : children}
        </button>
    );
}