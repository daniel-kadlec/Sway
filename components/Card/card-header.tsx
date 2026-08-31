'use client'

type CardHeaderProps = {
    title: string;
    primary?: boolean;
};

export default function CardHeader({ title, primary }: CardHeaderProps) {

    return (
        <div className={`flex items-center justify-center px-10 py-5 min-h-[100px] ${primary ? 'gradient-primary' : 'bg-primary-light'} rounded-full shadow-set`}>
            <h1 className={`font-semibold text-4xl ${primary ? 'text-offwhite' : 'text-primary'}`}>{title}</h1>
        </div>
    );
}