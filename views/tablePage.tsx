import Table from "@/components/table";
import { getLeads } from "@/lib/utils/data/leads";
import { FaSort } from "react-icons/fa6";

export default async function TablePage() {
    const leads = await getLeads()

    const columns = [
        "Name",
        "E-mail",
        "IG username",
        "Phone",
        "Website",
        "Primary contact",
        "Primary follow up",
        "Secondary contact",
        "Secondary follow up",
        "Stage",
        "Outcome",
    ];

    return (
        <div className="content-container rounded-3xl bg-offwhite shadow-primary p-4">
            <div className="overflow-x-auto custom-scrollbar">
                <table className="w-full min-w-max text-left text-2xl border-separate border-spacing-0 rounded-3xl">
                    <thead className="text-offwhite">
                    <tr className="gradient-primary shadow-inner-light">
                        {columns.map((col, index) => (
                            <th
                                key={col}
                                className={`px-6 py-8 font-bold whitespace-nowrap
                                    ${index === 0 ? "rounded-l-full" : ""}
                                    ${index === columns.length - 1 ? "rounded-r-full" : ""}
                                `}
                            >
                                {col}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <Table leads={leads} />
                </table>
            </div>
        </div>
    );
}