type RecentItemProps = {
    label: string;
    value: string | number;
    className?: string;
};

export default function RecentItem({ label, value, className }: RecentItemProps) {
    return (
        <div className={`flex flex-col items-start justify-center ${className}`}>
            <span className="text-primary text-3xl">{label}</span>
            <span className="text-5xl font-semibold text-offblack">{value}</span>
        </div>
    );
}