type StatsProps = {
    className?: string;
}
export default function Stats({className}: StatsProps){
    return(
        <div className={`bg-white rounded-3xl shadow-md p-4 h-[200px] ${className}`}>
            <h1>Stats</h1>
        </div>
    )
}