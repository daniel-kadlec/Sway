import StatusSummaryItem from "@/app/components/status-summary-item";

import { IoIosWarning } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";

export default function StatusSummary() {
    return (
        <div className="bg-white rounded-3xl shadow-primary h-full w-full py-8 px-14 flex items-center justify-between">
            <StatusSummaryItem
                icon={IoIosWarning}
                text="3 Overdue"
                bgColor="bg-error-light"
                iconColor="text-error"
                iconSize={30}
                iconOffsetY={-2}
            />

            <StatusSummaryItem
                icon={FaRegClock}
                text="5 Pending"
                bgColor="bg-warning-light"
                iconColor="text-warning"
                iconSize={25}
            />

            <StatusSummaryItem
                icon={FaUser}
                text="12 Assigned"
                bgColor="bg-primary-light"
                iconColor="text-primary"
                iconSize={22}
            />
        </div>
    );
}