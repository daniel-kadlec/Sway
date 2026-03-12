import Link from "next/link";
import StatusSummary from "@/app/components/status-summary";

export default function Navbar(){
    return  (
        <div className={'w-full flex h-80 mb-(--container-gap)'}>

            {/*Left side*/}
            <div className={'w-1/2 h-full bg-gray-300 rounded-l-3xl rounded-br-3xl p-12 mr-(--container-gap)'}>
                Hello, welcome back!
            </div>

            {/*Right side*/}
            <div className="flex flex-col justify-between w-1/2 h-full gap-(--container-gap)">
                {/*Nav*/}
                <div className="w-[calc(100%+var(--container-gap))] -ml-(--container-gap) h-1/3 bg-gray-300 rounded-r-3xl p-11 flex items-center justify-end">
                    <span className="flex flex-row gap-6">
                        <Link href="/dashboard">Dashboard</Link>
                        <Link href="/kanban">Kanban</Link>
                        <Link href="/table">Table</Link>
                    </span>
                </div>

                <div className="h-full">
                    <StatusSummary/>
                </div>

            </div>
        </div>
    )
}