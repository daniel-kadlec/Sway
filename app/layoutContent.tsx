'use client';

import { usePathname } from 'next/navigation';
import Navbar from "@/app/components/Navbar/navbar";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const hideNavbar = pathname === "/login";

    return (
        <>
            {!hideNavbar && <Navbar />}
            {children}
        </>
    );
}