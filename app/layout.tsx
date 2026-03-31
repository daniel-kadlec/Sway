import "./globals.css";
import { ModalProvider } from "@/app/context/ModalContext";
import ModalShell from "@/app/components/Modal/modalShell";

import {ToastProvider} from "@/app/context/ToastContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="p-12 3xl:p-24 flex flex-col overflow-hidden bg-offwhite h-screen max-w-[1300px] 3xl:max-w-[1800px] mx-auto">
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