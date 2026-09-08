'use client';

import NavLinks from "@/components/Navbar/navLinks";
import {useModal} from "@/context/ModalContext";
import { useRouter } from "next/navigation";
import {useToast} from "@/context/ToastContext";
import logout from "@/lib/utils/auth/logout";

import { Plus, LogOut, Settings } from 'lucide-react';

import {getSettings} from "@/lib/utils/settings/settings";
import Image from "next/image"
import logo from "@/public/logo.svg";
import {motion} from "motion/react";

export default function Navbar(){

    const { openModal } = useModal();
    const { showToast } = useToast();
    const router = useRouter();

    return  (
        <motion.div className="gradient-primary shadow-nav-set rounded-r-4xl px-8 py-16 w-60 relative"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}>

            <Image src={logo} alt={"Logo"} className={'w-[90%] mx-auto mt-6'}></Image>
            <NavLinks/>
            <div className={'flex flex-col items-start ml-1 gap-6 w-full absolute bottom-16'}>
                <span onClick={() => openModal("create")} className={'navbar-action'}>
                    <Plus size={28} className={'text-white cursor-pointer'}/>
                    Create entry
                </span>
                <span className={'navbar-action'}
                      onClick={async () => {
                          await logout();
                          router.push("/login");
                          router.refresh();
                          showToast("Logged out successfully","See you later!","success");
                      }}>
                    <LogOut size={24} className={'text-white cursor-pointer ml-1 mr-[1px]'}/>
                    Log out
                </span>
                <span className={'navbar-action'}
                      onClick={async() => {
                          const settings = await getSettings()
                          openModal("settings", settings)
                      }}>
                    <Settings size={26} className={'text-white cursor-pointer ml-0.5'}/>
                    Settings
                </span>
            </div>
        </motion.div>
    )
}