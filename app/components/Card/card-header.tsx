    'use client';

import {VariantConfig} from "@/app/components/Card/card";

type CardHeaderProps = {
    title: string;
    v: VariantConfig;
};

export default function CardHeader({ title, v }: CardHeaderProps) {
    const Icon = v.icon;

    return (
        <div className={`flex items-center justify-between px-10 py-5 border-b min-h-[100px] ${v.bg} ${v.text} ${v.bg ? "border-primary" : "border-lightgray"}`}>
            <h1 className="font-semibold text-4xl">{title}</h1>

            {Icon && (
                <div className={`p-3 rounded-full flex items-center justify-center ${v.iconBg}`}>
                    <Icon className={v.iconColor} size={26} />
                </div>
            )}
        </div>
    );
}