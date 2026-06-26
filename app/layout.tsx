import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";
import ModalShell from "@/components/Modal/modalShell";
import { Baloo_2 } from "next/font/google";
import {ToastProvider} from "@/context/ToastContext";
import React from "react";

const baloo = Baloo_2({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-primary",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${baloo.variable} font-primary min-h-screen`}>
                    <ToastProvider>
                        <ModalProvider>
                            <ModalShell />
                            {children}
                        </ModalProvider>
                    </ToastProvider>
            </body>
        </html>
    );
}