import { FiChevronDown } from "react-icons/fi";
import RecentItem from "./recent-item";

type RecentProps = {
    className?: string;
};

export default function Recent({ className }: RecentProps) {
    return (
        <div className={`long-card-base flex items-center justify-end relative ${className}`}>

            <div className="bg-primary text-white rounded-3xl px-16 py-6 flex flex-col justify-center  font-medium h-full absolute top-0 left-0 shadow-primary">
                <span className={'text-3xl'}>
                    Data for the last
                </span>
                <span className={'flex items-center gap-1 -mt-2 cursor-pointer text-4xl'}>
                    <span className="font-semibold">2 weeks</span>
                    <FiChevronDown size={36} className={'mt-2'}/>
                </span>
            </div>

            {/* Stats */}
            <div className="flex gap-24 mr-26">
                <RecentItem label="Leads added" value="+18" />
                <RecentItem label="Contacted" value="+14" />
                <RecentItem label="Responded" value="+9" />
                <RecentItem label="Deals won" value="+3" />
                <RecentItem label="Deals lost" value="+6" />
            </div>

        </div>
    );
}