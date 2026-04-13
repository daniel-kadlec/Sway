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

            return (
                <tr key={lead.id} onClick={() => openModal("view")} className="border-b border-b-lightgray transition duration-300 cursor-pointer hover:bg-lightgray ">
                    <td className="font-bold text-primary table-cell">{lead.companyName}</td>
                    <td className="table-cell">{contacts.EMAIL || "—"}</td>
                    <td className="table-cell">{contacts.INSTAGRAM || "—"}</td>
                    <td className="table-cell">{contacts.PHONE || "—"}</td>
                    <td className="table-cell">{lead.website || "—"}</td>

                    <td className="table-cell">
                        {/*{lead.nextActionAt*/}
                        {/*    ? new Date(lead.nextActionAt).toLocaleDateString("cs-CZ", {*/}
                        {/*        day: "2-digit",*/}
                        {/*        month: "2-digit",*/}
                        {/*        year: "numeric",*/}
                        {/*    })*/}
                        {/*    : "—"}*/}
                        —
                    </td>
                    <td className="table-cell">—</td>


                    <td className="table-cell">—</td>
                    <td className="table-cell">—</td>

                    <td className="table-cell">—</td>
                    <td className="table-cell">—</td>
                </tr>
            )}
        )}
        </tbody>
    );
}