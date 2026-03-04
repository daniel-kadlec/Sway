import Link from "next/link";
export default function Navbar(){
    return  (
        <div className={'w-full flex'}>
            <div className={'w-1/2 bg-gray-300 h-24 rounded-l-md rounded-br-md'}>Hellow</div>
            <div className={'w-1/2 bg-gray-300 h-12 rounded-r-md'}>
                <span className={'flex flex-row gap-4'}>
                    <Link href="/dashboard">Dashboard</Link>
                    <Link href="/kanban">Kanban</Link>
                    <Link href="/table">Table</Link>
                </span>
            </div>
        </div>
    )
}