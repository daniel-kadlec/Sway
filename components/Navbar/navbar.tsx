'use client';

import StatusSummary from "@/components/Status summary/status-summary";
import NavLinks from "@/components/Navbar/navLinks";
import { useEffect, useState } from "react";
import {useModal} from "@/context/ModalContext";
import { useRouter } from "next/navigation";
import {useToast} from "@/context/ToastContext";
import logout from "@/lib/utils/auth/logout";

import { FaUser } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";

import { TbLogout2 } from "react-icons/tb";
import ContextMenu from "@/components/context-menu";
import Button from "@/components/button";



export default function Navbar(){

    const [time, setTime] = useState(new Date());
    const { openModal } = useModal();
    const { showToast } = useToast();
    const router = useRouter();


    // time
    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    const weekday = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
    }).format(time);

    const monthDay = new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
    }).format(time);

    const clockTime = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    }).format(time);

    const greeting = () => {
        const hour = time.getHours();
        if (hour < 6) return "Máš chrápat";
        if (hour < 10) return "Good morning";
        if (hour < 13) return "Good day";
        if (hour < 18) return "Good afternoon";
        if (hour < 23) return "Good evening";
        if (hour < 24) return "Jdi chrápat";
    }

    const ContextMenucontent = (
        <div className={'text-offblack flex flex-col justify-center items-center p-3'}>
            <h1 className={'text-primary font-bold text-2xl'}>Daniel Kadlec</h1>
            <h1 className={''}>Admin</h1>
            <Button
                onClickAction={async () => {
                    await logout();

                    router.push("/login");
                    router.refresh();

                    showToast("Logged out successfully","See you later!","success");
                }}
                className="w-full justify-start mt-3 !bg-error-light !text-error icon-button"
            >
                <TbLogout2 className={'mt-0.5'} />
                Logout
            </Button>
        </div>
    )


    return  (
        <div className={'w-full flex h-80 mb-(--container-gap) text-offwhite'}>

            {/*Left side*/}
            <div className={'w-1/2 h-full bg-primary rounded-l-3xl rounded-br-3xl p-12 mr-(--container-gap) font-primary shadow-primary'}>
                <h1 className={'text-5xl font-bold'}>
                    {greeting() + ", Daniel!"}
                </h1>
                <h2 className={'text-3xl font-bold mt-1'}>You have — actions today</h2>

                <span className={'flex gap-4 items-center'}>
                    <span className={'date-element'}>{weekday}</span>
                    <span className={'circle'}></span>
                    <span className={'date-element'}>{monthDay}</span>
                    <span className={'circle'}></span>
                    <span className={'date-element'}>{clockTime}</span>
                </span>

            </div>

            {/*Right side*/}
            <div className="flex flex-col gap-(--container-gap) w-1/2 h-full relative">
                <div className={'cut-corner'}></div>
                {/*Nav*/}
                <div className="w-[calc(100%+var(--container-gap))] -ml-(--container-gap) h-2/5 bg-primary rounded-r-3xl flex items-center justify-end pr-18 min-h-2/5 shadow-primary-nav">
                    <span className={'flex items-center gap-18'}>
                        <NavLinks/>
                        <span className={'flex gap-4 items-center'}>
                            <FaPlus onClick={() => openModal("create")} size={28} className={'text-white cursor-pointer'}/>
                            <ContextMenu content={ContextMenucontent}>
                                <FaUser size={26} className={'text-white cursor-pointer'}/>
                            </ContextMenu>
                            <FaGear size={26} className={'text-white cursor-pointer'} onClick={() => openModal("settings")}/>
                        </span>

                    </span>

                </div>
                <StatusSummary/>
            </div>
        </div>
    )
}