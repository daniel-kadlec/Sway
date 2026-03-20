'use client';
import { IoLogoInstagram } from "react-icons/io";
import { FaRegCalendar, FaRegClock } from "react-icons/fa6";
import { FaFlagCheckered } from "react-icons/fa";
import { FaForward } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

import {useModal} from "@/app/Context/ModalContext";



export default function Lead() {
    const { openModal } = useModal();

    return (
        <div className="group relative h-30 w-full border-b border-lightgray py-4 px-10 flex flex-col justify-center overflow-hidden">

            {/* CONTENT */}
            <span className="flex gap-2 items-center z-10">
                <h1 className="font-bold text-3xl text-offblack">El Negro</h1>
                <IoLogoInstagram size={30} className="text-primary mt-0.5" />
            </span>

            <span className="mt-2 -ml-0.5 flex gap-4 items-center z-10">
                <span className="bg-primary-light text-primary px-4 py-0.5 rounded-full font-bold text-lg">
                    Stage
                </span>
                <span className="flex items-center gap-2 text-primary">
                    <FaRegCalendar size={20} />
                    <span className="text-lg font-semibold">12.2.</span>
                    <FaRegClock size={20} />
                    <span className="text-lg font-semibold">Today</span>
                </span>
            </span>

            {/*overlay*/}
            <div  onClick={() => openModal("view")} className="absolute inset-0 bg-primary/80 z-10 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center text-white cursor-pointer p-4">
                <div className={'flex items-center gap-10'}>
                    <FaFlagCheckered onClick={(e) => {e.stopPropagation(); openModal("finish");}} size={38} className={'lead-control'}/>
                    <FaForward onClick={(e) => {e.stopPropagation();}} size={38} className={'lead-control'}/>
                    <HiOutlineDotsHorizontal onClick={(e) => {e.stopPropagation(); openModal("view");}} size={46} className={'lead-control -ml-2'}/>
                </div>
            </div>
        </div>
    );
}