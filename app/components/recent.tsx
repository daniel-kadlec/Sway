type RecentProps = {
    className?: string;
}
export default function Recent({className}: RecentProps){
    return(
        <div className={`bg-white rounded-3xl shadow-md p-4 h-[150px] ${className}`}>
            <h1>Stats</h1>
        </div>
    )
}