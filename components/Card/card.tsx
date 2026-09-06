'use client';

import Lead from "@/components/Card/lead";
import CardHeader from "@/components/Card/card-header";

import { IconType } from "react-icons";
import { FaClock, FaFloppyDisk } from "react-icons/fa6";
import { IoIosWarning } from "react-icons/io";
import { FaTrophy } from "react-icons/fa";
import {FormattedLead} from "@/types/formattedLead";

type CardProps = {
    title: string;
    className?: string;
    leads: FormattedLead[];
    primary?: boolean;
};
export default function Card({ title, className, leads, primary }: CardProps) {

    return (
        <div className={`bg-white rounded-3xl rounded-t-[50px] shadow-primary h-full overflow-y-scroll hide-scrollbar ${className}`}>
            <CardHeader title={title} primary={primary}/>
            <div className={'flex flex-col justify-center items-center gap-4 mt-6 mx-4'}>
                {leads.map((lead: FormattedLead) => {
                    return(
                        <Lead lead={lead} key={lead.id}/>
                    )
                })}
            </div>
        </div>
    );
}