import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";
import ModalShell from "@/components/Modal/modalShell";
import { Baloo_2 } from "next/font/google";

const baloo = Baloo_2({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-primary",
});

import {ToastProvider} from "@/context/ToastContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${baloo.variable} font-primary p-12 3xl:p-24 flex flex-col overflow-hidden bg-offwhite h-screen max-w-[1300px] 3xl:max-w-[1800px] mx-auto`}>
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