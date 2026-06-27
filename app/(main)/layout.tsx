import Navbar from "@/components/Navbar/navbar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={'bg-offwhite flex w-screen h-screen overflow-hidden'}>
            <Navbar />
            {children}
        </div>
    );
}