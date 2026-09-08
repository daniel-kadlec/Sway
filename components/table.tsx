'use client';

import { useModal } from "@/context/ModalContext";
import { FormattedLead } from "@/types/formattedLead";
import { motion } from "motion/react";
import { viewAnimation } from "@/lib/animations/viewTransitions";

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

export default function Table({ leads }: { leads: FormattedLead[] }) {
    const { openModal } = useModal();

    return (
        <div className="w-full min-w-0 box-border p-12 h-screen">
            <motion.div className="w-full min-w-0 overflow-x-auto custom-scrollbar rounded-3xl shadow-primary bg-white"
                        {...viewAnimation}>
                <table className="min-w-max text-left text-2xl border-separate border-spacing-0 rounded-3xl w-full h-full">
                    <thead className="text-offwhite">
                    <tr className="gradient-primary shadow-set">
                        {columns.map((col) => (
                            <th
                                key={col}
                                className="px-6 py-8 font-bold whitespace-nowrap"
                            >
                                {col}
                            </th>
                        ))}
                    </tr>
                    </thead>

                    <tbody>
                        {leads.length === 0 ? (
                            <tr className="text-darkgray font-semibold">
                                <td colSpan={11} className="text-center">
                                    There are no entries yet.
                                </td>
                            </tr>
                        ) : (
                            leads.map((lead) => (
                                <tr
                                    key={lead.id}
                                    onClick={() =>
                                        openModal("view", lead)
                                    }
                                    className="transition duration-300 cursor-pointer hover:bg-lightgray"
                                >
                                    <td className="font-bold text-primary table-cell">
                                        {lead.companyName}
                                    </td>

                                    <td className="table-cell">
                                        {lead.contacts.EMAIL || "—"}
                                    </td>

                                    <td className="table-cell">
                                        {lead.contacts.INSTAGRAM || "—"}
                                    </td>

                                    <td className="table-cell">
                                        {lead.contacts.PHONE || "—"}
                                    </td>

                                    <td className="table-cell">
                                        {lead.website || "—"}
                                    </td>

                                    <td className="table-cell">
                                        {lead.primaryContactAtFormatted}
                                    </td>

                                    <td className="table-cell">
                                        {lead.primaryFollowUpAtFormatted}
                                    </td>

                                    <td className="table-cell">
                                        {lead.secondaryContactAtFormatted}
                                    </td>

                                    <td className="table-cell">
                                        {lead.secondaryFollowUpAtFormatted}
                                    </td>

                                    <td className="table-cell">
                                        {lead.stageFormatted}
                                    </td>

                                    <td className="table-cell">
                                        {lead.outcome || "—"}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </motion.div>
        </div>
    );
}
