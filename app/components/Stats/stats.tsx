import StatItem from "@/app/components/Stats/stats-item";

import { IoIosWarning } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";

type StatsProps = {
    className?: string;
};

export default function Stats({ className }: StatsProps) {
    return (
        <div
            className={`long-card-base flex items-center ${className}`}
        >
            <div className={'flex items-center justify-center gap-24 w-full pl-10 pr-16'}>
                <StatItem
                    icon={IoIosWarning}
                    label="Total leads"
                    value={420}
                    iconSize={42}
                    iconOffsetY={-1}
                />

                <div className="vertical-line" />

                <StatItem
                    icon={FaRegClock}
                    label="Total replies"
                    value={69}
                    iconSize={36}
                />

                <div className="vertical-line" />

                <StatItem
                    icon={FaUser}
                    label="Total clients"
                    value={420}
                    iconSize={32}
                />

                <div className="vertical-line" />

                <StatItem
                    icon={FaArrowTrendUp}
                    label="Conversion rate"
                    value="69%"
                    iconSize={32}
                />
            </div>
        </div>
    );
}