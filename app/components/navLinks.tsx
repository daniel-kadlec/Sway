import Link from "next/link";

export default function NavLinks(){
    return (
        <span className="flex flex-row gap-16">
            <Link className={'link'} href="/dashboard">Dashboard</Link>
            <Link className={'link'} href="/kanban">Kanban</Link>
            <Link className={'link'} href="/table">Table</Link>
        </span>
    )
}