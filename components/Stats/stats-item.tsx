import { IconType } from "react-icons";

type StatItemProps = {
    icon: IconType;
    label: string;
    value: string | number;

    iconSize?: number;
    iconOffsetY?: number;

    className?: string;
};

export default function StatItem({ icon: Icon, label, value, iconSize = 28, iconOffsetY = 0, className }: StatItemProps) {
    return (
        <div className={`flex items-center gap-7 ${className}`}>
            {/* icon circle */}
            <div className="w-20 h-20 rounded-full bg-primary-light flex items-center justify-center">
                <Icon
                    size={iconSize}
                    style={{ transform: `translateY(${iconOffsetY}px)` }}
                    className="text-primary"
                />
            </div>

            {/* text */}
            <div className="flex flex-col">
                <span className="text-darkgray text-2xl">{label}</span>
                <span className="text-4xl font-semibold -mt-1">{value}</span>
            </div>
        </div>
    );
}