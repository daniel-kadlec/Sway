'use client';

import { IoLogoInstagram } from "react-icons/io";
import { FaRegCalendar, FaRegClock } from "react-icons/fa6";

import { useModal } from "@/context/ModalContext";
import {FormattedLead} from "@/types/formattedLead";
import {IoCall, IoMail} from "react-icons/io5";

type LeadProps = {
    lead: FormattedLead;
};

export default function Lead({ lead }: LeadProps) {
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
                return <IoLogoInstagram size={34} className={`mt-0.5 text-primary`} />;
            case "EMAIL":
                return <IoMail size={32} className={`mt-0.5 ml-0.5 text-primary`} />;
            case "PHONE":
                return <IoCall size={34} className={`mt-0.5 text-primary`} />;
            default:
                return null;
        }
    }

    return (
        <div onClick={() => openModal("view", lead)} className="group relative h-30 w-full px-10 flex flex-col justify-center overflow-hidden cursor-pointer bg-lightgray shadow-set transition-all duration-200 rounded-xl shrink-0">

            <span className="flex gap-2 items-center z-10">
                <h1 className="font-bold text-3xl text-offblack">{lead.companyName}</h1>
            </span>

            <span className="mt-2 -ml-0.5 flex justify-between gap-4 items-center z-10">
                <span className={'flex gap-2'}>
                    {assignContactIcon(lead.primaryPlatform!)}
                    <span className={`px-4 py-0.5 rounded-full font-semibold text-lg bg-primary-light text-primary flex justify-center items-center`}>
                        {lead.stageFormatted}
                    </span>
                </span>
                {lead.nextActionAt && (
                    <span className={`flex items-center gap-2 text-lg font-semibold text-darkgray`}>
                        <FaRegCalendar size={20} />
                        <span className="">{lead.nextActionAtFormatted.substring(0, lead.nextActionAtFormatted.length - 5)}</span>
                        <FaRegClock size={20} />
                        <span className="">{timeUntil(lead.nextActionAt) + 1 + "d"}</span>
                    </span>
                )}
            </span>
        </div>
    );
}