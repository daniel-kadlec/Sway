"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react";

import {House, LayoutGrid, List} from 'lucide-react';
export default function NavLinks(){
    const pathname = usePathname()

    const containerRef = useRef<HTMLDivElement | null>(null)

    const DashboardRef = useRef<HTMLAnchorElement | null>(null)
    const KanbanRef = useRef<HTMLAnchorElement | null>(null)
    const TableRef = useRef<HTMLAnchorElement | null>(null)

    const [pill, setPill] = useState({top: 0})

    function updatePill(activeLink: HTMLAnchorElement | null) {
        if (!activeLink || !containerRef.current) return

        setPill({
            top: activeLink.offsetTop,
        })
    }

    useEffect(() => {
        if (pathname === "/dashboard") updatePill(DashboardRef.current)
        if (pathname === "/kanban") updatePill(KanbanRef.current)
        if (pathname === "/table") updatePill(TableRef.current)
    }, [pathname])

    return (
        <div ref={containerRef} className={'relative -mt-44'}>
            <div className={'bg-offwhite inner-shadow-dark absolute rounded-full transition-all duration-300 h-[50px] z-0 w-full'}
                 style={{
                transform: `translateY(${pill.top}px)`
            }}/>

            <span className="flex flex-col gap-4 z-10">
               <Link ref={DashboardRef} className={`link flex ${pathname === '/dashboard' ? 'text-primary' : 'text-white'}`} href="/dashboard">
                   <motion.span className={'link-text'} animate={{ x: pathname === '/dashboard' ? 0 : 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
                       <House className={'mb-[2px]'} size={22}/>
                       Dashboard
                   </motion.span>
               </Link>

               <Link ref={KanbanRef} className={`link flex ${pathname === '/kanban' ? 'text-primary' : 'text-white'}`} href="/kanban">
                   <motion.span className={'link-text'} animate={{ x: pathname === '/kanban' ? 20: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
                       <LayoutGrid className={'mb-[2px]'} size={22}/>
                       Board
                   </motion.span>
               </Link>

               <Link ref={TableRef} className={`link flex ${pathname === '/table' ? 'text-primary' : 'text-white'}`} href="/table">
                   <motion.span className={'link-text'} animate={{ x: pathname === '/table' ? 12 : 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
                       <List className={'mb-[2px]'} size={22}/>
                       Records
                   </motion.span>
               </Link>
            </span>
        </div>

    )
}