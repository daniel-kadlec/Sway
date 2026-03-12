import Link from "next/link";
import StatusSummary from "@/app/components/status-summary";
import Stats from "@/app/components/stats";

export default function Navbar(){
    return  (
        <div className={'w-full flex h-80 mb-(--container-gap)'}>

            {/*Left side*/}
            <div className={'w-1/2 h-full bg-gray-300 rounded-l-3xl rounded-br-3xl p-12 mr-(--container-gap)'}>
                Hello, welcome back!
            </div>

            {/*Right side*/}
            <div className="flex flex-col gap-(--container-gap) w-1/2 h-full relative">
                <div className={'cut-corner'}></div>
                {/*Nav*/}
                <div className="w-[calc(100%+var(--container-gap))] -ml-(--container-gap) h-1/3 bg-gray-300 rounded-r-3xl flex items-center justify-end pr-12 min-h-1/3">
                    <span className="flex flex-row gap-6">
                        <Link href="/dashboard">Dashboard</Link>
                        <Link href="/kanban">Kanban</Link>
                        <Link href="/table">Table</Link>
                    </span>
                </div>
                <StatusSummary/>
            </div>
        </div>
    )
}