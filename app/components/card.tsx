import Lead from "@/app/components/lead";

type CardProps = {
    className?: string;
};
export default function Card({className}: CardProps) {
    return (
        <div className={`bg-white rounded-3xl shadow-md p-4 h-[400px] ${className}`}>
            <Lead/>
        </div>
    );
}