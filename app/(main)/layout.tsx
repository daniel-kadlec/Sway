import Navbar from "@/components/Navbar/navbar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={'bg-offwhite w-screen h-screen'}>
            <Navbar />
            {children}
        </div>
    );
}