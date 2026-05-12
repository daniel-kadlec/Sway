'use client';

import { IoLogoInstagram } from "react-icons/io";
import { FaRegCalendar, FaRegClock } from "react-icons/fa6";
import { FaFlagCheckered, FaForward } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

import { useModal } from "@/context/ModalContext";
import { VariantConfig } from "@/components/Card/card";
import {FormattedLead} from "@/types/formattedLead";

type LeadProps = {
    v: VariantConfig;
    lead: FormattedLead;
};

export default function Lead({ v, lead }: LeadProps) {
    const { openModal } = useModal();

    function timeUntil(nextActionAt: any) {
        const now = new Date();
        const target = new Date(nextActionAt);

        const diffMs = target.getTime() - now.getTime();

        return Math.floor(diffMs / (1000 * 60 * 60 * 24));
    }

    return (
        <div className="group relative h-30 w-full border-b border-lightgray py-4 px-10 flex flex-col justify-center overflow-hidden">

            <span className="flex gap-2 items-center z-10">
                <h1 className="font-bold text-3xl text-offblack">{lead.companyName}</h1>
                <IoLogoInstagram size={30} className={`${v.iconColor} mt-0.5`} />
            </span>

            <span className="mt-2 -ml-0.5 flex gap-4 items-center z-10">
                <span className={`px-4 py-0.5 rounded-full font-bold text-lg ${v.iconBg} ${v.iconColor}`}>
                    {lead.stageFormatted}
                </span>

                {lead.nextActionAt && (
                    <span className={`flex items-center gap-2 ${v.iconColor}`}>
                        <FaRegCalendar size={20} />
                        <span className="text-lg font-semibold">{lead.nextActionAtFormatted.substring(0, lead.nextActionAtFormatted.length - 5)}</span>
                        <FaRegClock size={20} />
                        <span className="text-lg font-semibold">{timeUntil(lead.nextActionAt) + 1 + "d"}</span>
                    </span>
                )}
            </span>

            {/* overlay */}
            <div
                onClick={() => openModal("view")}
                className={`absolute inset-0 bg-primary/80 z-10 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center text-white cursor-pointer p-4`}
            >
                <div className="flex items-center gap-10">
                    <FaFlagCheckered
                        onClick={(e) => {
                            e.stopPropagation();
                            openModal("finish");
                        }}
                        size={38}
                        className="lead-control"
                    />

                    <FaForward
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                        size={38}
                        className="lead-control"
                    />

                    <HiOutlineDotsHorizontal
                        onClick={(e) => {
                            e.stopPropagation();
                            openModal("view");
                        }}
                        size={46}
                        className="lead-control -ml-2"
                    />
                </div>
            </div>
        </div>
    );
}