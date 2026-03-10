type RecentProps = {
    className?: string;
}
export default function Recent({className}: RecentProps){
    return(
        <div className={`bg-white rounded-3xl shadow-md p-4 h-[200px] ${className}`}>
            <h1>Recent</h1>
        </div>
    )
}