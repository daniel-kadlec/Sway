'use client';

import Lead from "@/components/Card/lead";
import CardHeader from "@/components/Card/card-header";

import { IconType } from "react-icons";
import { FaClock, FaFloppyDisk } from "react-icons/fa6";
import { IoIosWarning } from "react-icons/io";
import { FaTrophy } from "react-icons/fa";
import {FormattedLead} from "@/types/formattedLead";

type VariantKey = "blue" | "red" | "yellow" | "gray" | "purple" | "green";

export type VariantConfig = {
    bg: string;
    iconBg: string;
    iconColor: string;
    text: string;
    icon?: IconType;
};

type CardProps = {
    title: string;
    variant?: VariantKey;
    className?: string;
    leads: FormattedLead[];
};

const variants: Record<VariantKey, VariantConfig> = {
    blue: {
        bg: "bg-primary",
        iconBg: "bg-primary-light",
        iconColor: "text-primary",
        text: "text-white",
    },

    red: {
        bg: "",
        iconBg: "bg-error-light",
        iconColor: "text-error",
        text: "text-offblack",
        icon: IoIosWarning,
    },

    yellow: {
        bg: "",
        iconBg: "bg-warning-light",
        iconColor: "text-warning",
        text: "text-offblack",
        icon: FaClock,
    },

    gray: {
        bg: "",
        iconBg: "bg-lightgray",
        iconColor: "text-darkgray",
        text: "text-offblack",
        icon: FaFloppyDisk,
    },

    purple: {
        bg: "",
        iconBg: "bg-primary-light",
        iconColor: "text-primary",
        text: "text-offblack",
        icon: FaClock,
    },

    green: {
        bg: "",
        iconBg: "bg-success-light",
        iconColor: "text-success",
        text: "text-offblack",
        icon: FaTrophy,
    },
};

export default function Card({ title, variant = "blue", className, leads }: CardProps) {
    const v = variants[variant];

    return (
        <div className={`bg-white rounded-3xl shadow-primary h-[550px] overflow-y-scroll hide-scrollbar ${className}`}>
            <CardHeader title={title} v={v} />

            {leads.map((lead: FormattedLead) => {
                return(
                    <Lead v={v} lead={lead} key={lead.id}/>
                )
            })}
        </div>
    );
}