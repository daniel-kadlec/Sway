import "./globals.css";
import Navbar from "@/app/components/navbar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
      <Navbar/>
        {children}
      </body>
    </html>
  );
}
