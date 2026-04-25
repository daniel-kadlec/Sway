import { IconType } from "react-icons";

type StatusSummaryItemProps = {
    icon: IconType;
    text: string;
    bgColor: string;
    iconColor: string;
    iconSize?: number;
    iconOffsetY?: number;
};

export default function StatusSummaryItem({ icon: Icon, text, bgColor, iconColor, iconSize = 28, iconOffsetY = 0 }: StatusSummaryItemProps) {
    return (
        <span className="flex gap-4 items-center">
            <span className={`size-12 ${bgColor} rounded-full flex justify-center items-center`}>
                <Icon
                    size={iconSize}
                    className={iconColor}
                    style={{ marginTop: iconOffsetY }}
                />
            </span>

            <h1 className="text-offblack font-bold text-3xl">
                {text}
            </h1>
        </span>
    );
}