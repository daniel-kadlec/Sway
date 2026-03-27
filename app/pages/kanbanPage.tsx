import Card from "@/app/components/Card/card";
import Recent from "@/app/components/Recent/recent";
export default function KanbanPage(){
    return(
        <div className={'h-full'}>
            <div className="grid grid-cols-4 grid-rows-1 h-full gap-6">
                <Card title="Backlog" variant="gray" />
                <Card title="Active" variant="purple" />
                <Card title="Lost" variant="red" />
                <Card title="Won" variant="green" />
                <Recent className={'col-span-4'}/>
            </div>
        </div>
    )
}