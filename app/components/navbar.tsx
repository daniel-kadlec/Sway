import Link from "next/link";
import StatusSummary from "@/app/components/status-summary";
export default function Navbar(){
    return  (
        <div className={'w-full flex h-60 mb-4'}>
            <div className={'w-1/2 h-full bg-gray-300 rounded-l-3xl rounded-br-3xl p-12'}>Hellow</div>
            <div className={'flex flex-col w-1/2'}>
                <div className={'w-full h-1/3 bg-gray-300 rounded-r-3xl p-12 flex items-center justify-end'}>
                    <span className={'flex flex-row gap-6'}>
                        <Link href="/dashboard">Dashboard</Link>
                        <Link href="/kanban">Kanban</Link>
                        <Link href="/table">Table</Link>
                    </span>
                </div>
                <StatusSummary/>
            </div>

                <div>
            </div>
        </div>
    )
}