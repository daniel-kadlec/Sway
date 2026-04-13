'use client';

import { useModal } from "@/app/context/ModalContext";

export default function Table({ leads }: { leads: any[] }) {
    const { openModal } = useModal();

    function mapContacts(lead: any) {
        const result = {
            EMAIL: null,
            INSTAGRAM: null,
            PHONE: null,
        };

        result[lead.primaryPlatform as "EMAIL" | "INSTAGRAM" | "PHONE"] =
            lead.primaryContactValue;

        if (lead.secondaryPlatform && lead.secondaryContactValue) {
            result[lead.secondaryPlatform as "EMAIL" | "INSTAGRAM" | "PHONE"] =
                lead.secondaryContactValue;
        }

        return result;
    }



    return (
        <tbody>
        {leads.map((lead) => {
            const contacts = mapContacts(lead);

            const formattedStage =
                lead.stage.charAt(0).toUpperCase() +
                lead.stage.slice(1).toLowerCase();

            function formatedDate (date: string): string {
                if (date == undefined){
                    return "—";
                }
                const formatedDate = new Date(date).toLocaleDateString("cs-CZ", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                })
                return formatedDate;
            }

            return (
                <tr key={lead.id} onClick={() => openModal("view")} className="border-b border-b-lightgray transition duration-300 cursor-pointer hover:bg-lightgray ">
                    <td className="font-bold text-primary table-cell">{lead.companyName}</td>
                    <td className="table-cell">{contacts.EMAIL || "—"}</td>
                    <td className="table-cell">{contacts.INSTAGRAM || "—"}</td>
                    <td className="table-cell">{contacts.PHONE || "—"}</td>
                    <td className="table-cell">{lead.website || "—"}</td>

                    <td className="table-cell">{formatedDate(lead.primaryContactAt)}</td>
                    <td className="table-cell">{formatedDate(lead.primaryFollowUpAt)}</td>

                    <td className="table-cell">{formatedDate(lead.secondaryContactAt)}</td>
                    <td className="table-cell">{formatedDate(lead.secondaryFollowUpAt)}</td>

                    <td className="table-cell">{formattedStage}</td>
                    <td className="table-cell">{lead.verdict || "—"}</td>
                </tr>
            )}
        )}
        </tbody>
    );
}