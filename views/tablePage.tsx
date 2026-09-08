import Table from "@/components/table";
import { getLeads } from "@/lib/utils/data/leads";

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
        <div className="w-full min-w-0 box-border p-12 h-screen">
            <div className="w-full min-w-0 overflow-x-auto custom-scrollbar rounded-3xl shadow-primary bg-white">
                <table className="min-w-max text-left text-2xl border-separate border-spacing-0 rounded-3xl w-full h-full">
                    <thead className="text-offwhite">
                    <tr className="gradient-primary shadow-set">
                        {columns.map((col) => (
                            <th key={col} className="px-6 py-8 font-bold whitespace-nowrap">
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