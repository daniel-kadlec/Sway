import Link from "next/link";
import StatusSummary from "@/app/components/status-summary";

import { FaUser } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";



export default function Navbar(){
    return  (
        <div className={'w-full flex h-80 mb-(--container-gap) text-offwhite'}>

            {/*Left side*/}
            <div className={'w-1/2 h-full bg-primary rounded-l-3xl rounded-br-3xl p-12 mr-(--container-gap) font-primary shadow-primary'}>
                <h1 className={'text-5xl font-bold'}>Good morning, Daniel!</h1>
                <h2 className={'text-3xl font-bold mt-1'}>You have 3 actions today</h2>

                <span className={'flex gap-4 items-center mt-1'}>
                    <span className={'date-element'}>Wednesday</span>
                    <span className={'circle'}></span>
                    <span className={'date-element'}>February 18</span>
                    <span className={'circle'}></span>
                    <span className={'date-element'}>10:30</span>
                </span>

            </div>

            {/*Right side*/}
            <div className="flex flex-col gap-(--container-gap) w-1/2 h-full relative">
                <div className={'cut-corner'}></div>
                {/*Nav*/}
                <div className="w-[calc(100%+var(--container-gap))] -ml-(--container-gap) h-1/3 bg-primary rounded-r-3xl flex items-center justify-end pr-18 min-h-1/3 shadow-primary-nav">
                    <span className={'flex items-center gap-18'}>
                        <span className="flex flex-row gap-16">
                            <Link className={'link'} href="/dashboard">Dashboard</Link>
                            <Link className={'link'} href="/kanban">Kanban</Link>
                            <Link className={'link'} href="/table">Table</Link>
                        </span>
                        <span className={'flex gap-4 items-center'}>
                            <FaPlus size={28} className={'text-white cursor-pointer'}/>
                            <FaUser size={26} className={'text-white cursor-pointer'}/>
                        </span>

                    </span>

                </div>
                <StatusSummary/>
            </div>
        </div>
    )
}