import Lead from "@/app/components/lead";

type CardProps = {
    className?: string;
};
export default function Card({className}: CardProps) {
    return (
        <div className={`bg-white rounded-3xl shadow-primary p-4 h-full ${className}`}>
            <Lead/>
            <Lead/>
            <Lead/>
        </div>
    );
}