import Link from "next/link";
import StatusSummary from "@/app/components/status-summary";

export default function Navbar(){
    return  (
        <div className={'w-full flex h-80 mb-(--container-gap) text-offwhite'}>

            {/*Left side*/}
            <div className={'w-1/2 h-full bg-primary rounded-l-3xl rounded-br-3xl p-12 mr-(--container-gap) font-primary shadow-primary'}>
                <h1>Good morning, Daniel!</h1>
                <h2>You have 3 actions today</h2>
                <span className={'flex gap-4'}>
                    <span>Wednesday</span>
                    <span></span>
                    <span>February 18</span>
                    <span></span>
                    <span>10:30</span>
                </span>
            </div>

            {/*Right side*/}
            <div className="flex flex-col gap-(--container-gap) w-1/2 h-full relative">
                <div className={'cut-corner'}></div>
                {/*Nav*/}
                <div className="w-[calc(100%+var(--container-gap))] -ml-(--container-gap) h-1/3 bg-primary rounded-r-3xl flex items-center justify-end pr-12 min-h-1/3 shadow-primary-nav">
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