import "./globals.css";
import Navbar from "@/app/components/navbar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={'p-24 flex justify-center items-center'}>
      <div className={'w-full h-full max-w-[2000px]'}>
          <Navbar/>
          {children}
      </div>
      </body>
    </html>
  );
}
