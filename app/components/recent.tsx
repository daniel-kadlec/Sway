type RecentProps = {
    className?: string;
}
export default function Recent({className}: RecentProps){
    return(
        <div className={`long-card-base ${className}`}>
            <h1>Recent</h1>
        </div>
    )
}