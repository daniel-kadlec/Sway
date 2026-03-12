type StatsProps = {
    className?: string;
}
export default function Stats({className}: StatsProps){
    return(
        <div className={`bg-white rounded-3xl shadow-md p-4 h-[200px] max-h-[130px] 3xl:max-h-[180px] ${className}`}>
            <h1>Stats</h1>
        </div>
    )
}