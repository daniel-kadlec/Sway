import { IconType } from "react-icons";
import { FaClock, FaCheck} from "react-icons/fa6";
import { IoIosWarning } from "react-icons/io";
import { FaTrophy } from "react-icons/fa";
import { BsInbox } from "react-icons/bs";
import { FiTarget } from "react-icons/fi";

type CardHeaderProps = {
    title: string;
    variant?: "blue" | "red" | "yellow" | "gray" | "purple" | "green";
};

const variants: Record<string, {
    bg: string;
    iconBg: string;
    iconColor: string;
    text: string;
    icon: IconType;
}> = {
    blue: {
        bg: "bg-primary",
        iconBg: "bg-primary-light",
        iconColor: "text-primary",
        text: "text-white",
        icon: FiTarget,
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
        icon: BsInbox,
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

export default function CardHeader({ title, variant = "gray" }: CardHeaderProps) {
    const v = variants[variant];
    const Icon = v.icon;

    return (
        <div className={`flex items-center justify-between px-10 py-5 ${v.bg} ${v.text} border-b border-lightgray`}>
            <h3 className="font-semibold text-3xl">{title}</h3>

            <div className={`p-2.5 rounded-full flex items-center justify-center ${v.iconBg}`}>
                <Icon className={`${v.iconColor}`} size={20} />
            </div>
        </div>
    );
}