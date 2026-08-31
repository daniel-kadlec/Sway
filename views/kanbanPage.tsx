import Card from "@/components/Card/card";
import {getLeads} from "@/lib/utils/data/leads";
import {backlogLeads, activeLeads, lostLeads, wonLeads} from "@/lib/utils/filters/leadfilters";

export default async function KanbanPage(){

    const leads= await getLeads()


    return(
        <div className={'content-container'}>
            <div className="grid grid-cols-4 grid-rows-1 h-full gap-6">
                <Card title="Backlog" leads={backlogLeads(leads)}/>
                <Card title="Active" leads={activeLeads(leads)}/>
                <Card title="Lost" leads={lostLeads(leads)}/>
                <Card title="Won" leads={wonLeads(leads)}/>
            </div>
        </div>
    )
}