import { prisma } from "@/lib/utils/prisma";
import {useModal} from "@/app/context/ModalContext";
import Table from "@/app/components/table";


import { FaSort } from "react-icons/fa6";
import { FaSortUp } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa6";




export default async function TablePage() {

    const leads = await prisma.lead.findMany({
        orderBy: { createdAt: "desc" },
    });


    const columns = [
        "Name",
        "E-mail",
        "IG username",
        "Phone",
        "URL",
        "Primary contact",
        "Primary follow up",
        "Secondary contact",
        "Secondary follow up",
        "Stage",
        "Verdict",
    ];

    return (

        <div className="bg-white rounded-3xl shadow-primary overflow-x-auto h-full custom-scrollbar">
            <table className="w-full text-left border-collapse text-2xl">
                {/* Header */}
                <thead className="bg-primary text-offwhite">
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