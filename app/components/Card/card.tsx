import Lead from "@/app/components/Card/lead";
import CardHeader from "@/app/components/card-header";

type CardProps = {
    title: string;
    variant?: "blue" | "red" | "yellow" | "gray" | "purple" | "green";
    className?: string;
};

export default function Card({ title, variant, className }: CardProps) {
    return (
        <div className={`bg-white rounded-3xl shadow-primary h-full max-h-[600px] overflow-y-scroll hide-scrollbar ${className}`}>

            <CardHeader title={title} variant={variant} />

            <Lead />
            <Lead />
            <Lead />
        </div>
    );
}