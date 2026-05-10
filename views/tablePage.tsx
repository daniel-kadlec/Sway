import Table from "@/components/table";
import { getLeads } from "@/lib/data/leads";

import { FaSort } from "react-icons/fa6";


export default async function TablePage() {

    const leads = await getLeads();

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
        "Verdict",
    ];

    return (

        <div className="bg-white rounded-3xl shadow-primary overflow-x-auto h-full custom-scrollbar">
            <table className="w-full text-left border-collapse text-2xl relative">
                {/* Header */}
                <thead className="bg-primary text-offwhite sticky top-0">
                <tr>
                    {columns.map((col) => (
                        <th key={col} className="table-cell font-bold whitespace-nowrap">
                            <span className="flex items-center gap-2 cursor-pointer">
                                {col}
                                <FaSort className="size-6 mt-0.5"/>
                            </span>
                        </th>
                    ))}
                </tr>
                </thead>
                <Table leads={leads}/>
            </table>
        </div>
    );
}