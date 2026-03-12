type StatsProps = {
    className?: string;
}
export default function Stats({className}: StatsProps){
    return(
        <div className={`long-card-base ${className}`}>
            <h1>Stats</h1>
        </div>
    )
}