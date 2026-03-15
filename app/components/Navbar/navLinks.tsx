"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
export default function NavLinks(){
    const pathname = usePathname()

    const containerRef = useRef<HTMLDivElement | null>(null)

    const DashboardRef = useRef<HTMLAnchorElement | null>(null)
    const KanbanRef = useRef<HTMLAnchorElement | null>(null)
    const TableRef = useRef<HTMLAnchorElement | null>(null)

    const [pill, setPill] = useState({left: 0, width: 0})

    function updatePill(activeLink: HTMLAnchorElement | null) {
        if (!activeLink || !containerRef.current) return

        const rect = activeLink.getBoundingClientRect()
        const containerRect = containerRef.current.getBoundingClientRect()

        setPill({
            left: rect.left - containerRect.left,
            width: rect.width
        })
    }

    useEffect(() => {
        if (pathname === "/dashboard") updatePill(DashboardRef.current)
        if (pathname === "/kanban") updatePill(KanbanRef.current)
        if (pathname === "/table") updatePill(TableRef.current)
    }, [pathname])

    return (
        <div ref={containerRef} className={'relative'}>
            <div className={'bg-white absolute rounded-full transition-all duration-300  h-full z-0'}
                 style={{
                width: pill.width,
                transform: `translateX(${pill.left}px)`
            }}/>

            <span className="flex flex-row gap-10 z-10">
                <Link ref={DashboardRef} className={`link z-20 px-5 py-1.5 ${pathname === '/dashboard' ? 'text-primary' : 'text-white'}`} href="/dashboard">Dashboard</Link>
                <Link ref={KanbanRef} className={`link z-20 px-5 py-1.5 ${pathname === '/kanban' ? 'text-primary' : 'text-white'}`} href="/kanban">Kanban</Link>
                <Link ref={TableRef} className={`link z-20 px-5 py-1.5 ${pathname === '/table' ? 'text-primary' : 'text-white'}`} href="/table">Table</Link>
            </span>
        </div>

    )
}