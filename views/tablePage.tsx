'use client'

import Table from "@/components/table";
import { getLeads } from "@/lib/utils/data/leads";
import { FaSort } from "react-icons/fa6";
import {useEffect, useState} from "react";

export default function TablePage() {

    const [leads, setLeads] = useState([]);

    useEffect(() => {
        const fetchLeads = async () => {
            const data = await getLeads();
            setLeads(data);
        };
        fetchLeads();
    }, []);


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