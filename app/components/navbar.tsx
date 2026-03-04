export default function Navbar(){
    return  (
        <>
            <h1>Hello</h1>
            <span className={'flex flex-row gap-4'}>
                <a href="/dashboard">Dashboard</a>
                <a href="/kanban">Kanban</a>
                <a href="/table">Table</a>
            </span>

        </>
    )
}