'use client';

import { useModal } from "@/app/context/ModalContext";

export default function Table({ leads }: { leads: any[] }) {
    const { openModal } = useModal();

    return (
        <tbody>
        {leads.map((lead) => (
            <tr key={lead.id} onClick={() => openModal("view")} className="border-b border-b-lightgray transition duration-300 cursor-pointer hover:bg-lightgray ">
                <td className="font-bold text-primary table-cell">{lead.companyName}</td>
                <td className="table-cell">—</td>
                <td className="table-cell">—</td>
                <td className="table-cell">—</td>
                <td className="table-cell">{lead.website}</td>

                <td className="table-cell">{lead.primaryContact}</td>
                <td className="table-cell">—</td>


                <td className="table-cell">—</td>
                <td className="table-cell">—</td>

                <td className="table-cell">—</td>
                <td className="table-cell">—</td>
            </tr>
        ))}
        </tbody>
    );
}