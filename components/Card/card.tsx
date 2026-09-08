'use client';

import Lead from "@/components/Card/lead";
import CardHeader from "@/components/Card/card-header";
import {FormattedLead} from "@/types/formattedLead";

type CardProps = {
    title: string;
    className?: string;
    leads: FormattedLead[];
    primary?: boolean;
};
export default function Card({ title, className, leads, primary }: CardProps) {

    return (
        <div className={`bg-white rounded-3xl rounded-t-[50px] shadow-primary h-full${className}`}>
            <CardHeader title={title} primary={primary} />

            <div className="flex flex-col items-center text-center gap-2 mt-6 mx-4 h-[calc(100%-150px)] overflow-y-auto text-darkgray hide-scrollbar scroll-fade">
                {leads.length === 0 ? (
                    <>
                        <h2 className="text-xl font-semibold m-auto">There are no entries yet.</h2>
                    </>
                ) : (
                    leads.map((lead: FormattedLead) => (
                        <Lead lead={lead} key={lead.id} />
                    ))
                )}
            </div>
        </div>
    );
}