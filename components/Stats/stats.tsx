import StatItem from "@/components/Stats/stats-item";

import { FaUser } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaFrog } from "react-icons/fa";
import { FaComment } from "react-icons/fa";



type StatsProps = {
    className?: string;
};

export default function Stats({ className }: StatsProps) {
    return (
        <div
            className={`long-card-base flex items-center ${className}`}
        >
            <div className={'flex items-center justify-center gap-21 w-full'}>
                <StatItem
                    icon={FaFrog}
                    label="Total leads"
                    value={"—"}
                    iconSize={40}
                    iconOffsetY={-1}
                />

                <div className="vertical-line" />

                <StatItem
                    icon={FaComment }
                    label="Total replies"
                    value={"—"}
                    iconSize={38}
                />

                <div className="vertical-line" />

                <StatItem
                    icon={FaUser}
                    label="Total clients"
                    value={"—"}
                    iconSize={34}
                />

                <div className="vertical-line" />

                <StatItem
                    icon={FaArrowTrendUp}
                    label="Conversion rate"
                    value="—%"
                    iconSize={38}
                />
            </div>
        </div>
    );
}