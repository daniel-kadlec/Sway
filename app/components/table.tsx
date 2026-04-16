'use client';

import { useModal } from "@/app/context/ModalContext";
import { FormattedLead } from "@/app/types/formattedLead";

export default function Table({ leads }: { leads: FormattedLead[]}) {
    const { openModal } = useModal();

    return (
        <tbody>
        {leads.map((lead: FormattedLead) => {
            return (
                <tr key={lead.id} onClick={() => openModal("view", lead)} className="border-b border-b-lightgray transition duration-300 cursor-pointer hover:bg-lightgray ">
                    <td className="font-bold text-primary table-cell">{lead.companyName}</td>
                    <td className="table-cell">{lead.contacts.EMAIL || "—"}</td>
                    <td className="table-cell">{lead.contacts.INSTAGRAM || "—"}</td>
                    <td className="table-cell">{lead.contacts.PHONE || "—"}</td>
                    <td className="table-cell">{lead.website || "—"}</td>

                    <td className="table-cell">{lead.primaryContactAtFormatted}</td>
                    <td className="table-cell">{lead.primaryFollowUpAtFormatted}</td>

                    <td className="table-cell">{lead.secondaryContactAtFormatted}</td>
                    <td className="table-cell">{lead.secondaryFollowUpAtFormatted}</td>

                    <td className="table-cell">{lead.formattedStage}</td>
                    <td className="table-cell">{lead.verdict || "—"}</td>
                </tr>
            )}
        )}
        </tbody>
    );
}