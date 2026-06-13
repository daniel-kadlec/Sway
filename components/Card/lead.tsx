'use client';

import { IoLogoInstagram } from "react-icons/io";
import { FaRegCalendar, FaRegClock } from "react-icons/fa6";

import { useModal } from "@/context/ModalContext";
import { VariantConfig } from "@/components/Card/card";
import {FormattedLead} from "@/types/formattedLead";
import {IoCall, IoMail} from "react-icons/io5";

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

    const assignContactIcon = (platform: string) => {
        switch (platform) {
            case "INSTAGRAM":
                return <IoLogoInstagram size={30} className={`${v.iconColor} mt-0.5`} />;
            case "EMAIL":
                return <IoMail size={28} className={`${v.iconColor} mt-0.5 ml-0.5`} />;
            case "PHONE":
                return <IoCall size={30} className={`${v.iconColor} mt-0.5`} />;
            default:
                return null;
        }

    }

    return (
        <div onClick={() => openModal("view", lead)} className="group relative h-30 w-full border-b border-lightgray py-4 px-10 flex flex-col justify-center overflow-hidden cursor-pointer hover:bg-lightgray transition-all duration-200">

            <span className="flex gap-2 items-center z-10">
                <h1 className="font-bold text-3xl text-offblack">{lead.companyName}</h1>
                {assignContactIcon(lead.primaryPlatform!)}
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
        </div>
    );
}