import "./globals.css";
import Navbar from "@/app/components/Navbar/navbar";
import {ModalProvider} from "@/app/Context/ModalContext";
import ModalShell from "@/app/components/Modal/ModalShell";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={'p-12 3xl:p-24 flex flex-col overflow-hidden bg-offwhite h-screen max-w-[1300px] 3xl:max-w-[1800px] mx-auto'}>
        <ModalProvider>
            <ModalShell/>
              <Navbar/>
              {children}
        </ModalProvider>
      </body>
    </html>
  );
}
