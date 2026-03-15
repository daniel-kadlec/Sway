import "./globals.css";
import Navbar from "@/app/components/Navbar/navbar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={'p-12 3xl:p-24 flex flex-col overflow-hidden bg-offwhite h-screen max-w-[1300px] 3xl:max-w-[1800px] mx-auto'}>
          <Navbar/>
          {children}
      </body>
    </html>
  );
}
