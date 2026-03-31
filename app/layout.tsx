import "./globals.css";
import { ModalProvider } from "@/app/Context/ModalContext";
import ModalShell from "@/app/components/Modal/modalShell";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="p-12 3xl:p-24 flex flex-col overflow-hidden bg-offwhite h-screen max-w-[1300px] 3xl:max-w-[1800px] mx-auto">
                <ModalProvider>
                    <ModalShell />
                    {children}
                </ModalProvider>
            </body>
        </html>
    );
}