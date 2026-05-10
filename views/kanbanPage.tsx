import Card from "@/components/Card/card";
import Recent from "@/components/Recent/recent";
import {getLeads} from "@/lib/data/leads";

export default async function KanbanPage(){

    const leads = await getLeads();

    return(
        <div className={'h-full'}>
            <div className="grid grid-cols-4 grid-rows-1 h-full gap-6">
                <Card title="Backlog" variant="gray" leads={leads}/>
                <Card title="Active" variant="purple" leads={leads}/>
                <Card title="Lost" variant="red" leads={leads}/>
                <Card title="Won" variant="green" leads={leads}/>
                <Recent className={'col-span-4'}/>
            </div>
        </div>
    )
}