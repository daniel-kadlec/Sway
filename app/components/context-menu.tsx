import { useState, useRef, useEffect } from "react";
import Button from "@/app/components/button";

type ContextMenuProps = {
    children: React.ReactNode;
    content: React.ReactNode;
};

export default function ContextMenu({ children, content }: ContextMenuProps) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // close on outside click
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={ref} className="relative inline-block">
            {/* Trigger */}
            <div onClick={() => setOpen((v) => !v)}>
                {children}
            </div>

            {/* Menu */}
            {open && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 rounded-xl bg-white shadow-primary p-3 z-50">
                    {content}
                </div>
            )}
        </div>
    );
}