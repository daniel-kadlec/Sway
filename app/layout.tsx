import "./globals.css";
import Navbar from "@/app/components/navbar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={'p-24 flex flex-col overflow-hidden bg-gray-200 h-screen max-w-[1800px] mx-auto'}>
          <Navbar/>
          {children}
      </body>
    </html>
  );
}
