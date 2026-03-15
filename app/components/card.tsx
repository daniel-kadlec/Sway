import Lead from "@/app/components/lead";

type CardProps = {
    className?: string;
};
export default function Card({className}: CardProps) {
    return (
        <div className={`bg-white rounded-3xl shadow-primary h-full max-h-[600px] overflow-y-scroll hide-scrollbar ${className}`}>
            <Lead/>
            <Lead/>
            <Lead/>
        </div>
    );
}