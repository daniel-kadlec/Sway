import Card from "@/components/Card/card";
import Recent from "@/components/Recent/recent";
import {getLeads} from "@/lib/utils/data/leads";
import {backlogLeads, activeLeads, lostLeads, wonLeads} from "@/lib/utils/filters/leadfilters";

export default async function KanbanPage(){

    const leads = await getLeads()


    return(
        <div className={'h-full'}>
            <div className="grid grid-cols-4 grid-rows-1 h-full gap-6">
                <Card title="Backlog" variant="gray" leads={backlogLeads(leads)}/>
                <Card title="Active" variant="purple" leads={activeLeads(leads)}/>
                <Card title="Lost" variant="red" leads={lostLeads(leads)}/>
                <Card title="Won" variant="green" leads={wonLeads(leads)}/>
                <Recent className={'col-span-4'}/>
            </div>
        </div>
    )
}