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



export default function Navbar(){

    const { openModal } = useModal();
    const { showToast } = useToast();
    const router = useRouter();

    return  (
        <div className="bg-primary rounded-r-4xl flex flex-col justify-between px-8 py-16 w-56">
            <Image src={logo} alt={"Logo"} className={'w-[90%] mx-auto mt-6'}></Image>
            <NavLinks/>
            <div className={'flex flex-col items-start ml-1 gap-6 w-full'}>
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
        </div>
    )
}