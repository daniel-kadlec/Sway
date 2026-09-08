import Card from "@/components/Card/card";
import {getLeads} from "@/lib/utils/data/leads";
import {backlogLeads, activeLeads, lostLeads, wonLeads} from "@/lib/utils/filters/leadfilters";
import { cardDelay } from "@/lib/animations/viewTransitions";

export default async function KanbanPage(){

    const leads= await getLeads()


    return(
        <div className={'p-12 w-full'}>
            <div className="grid grid-cols-4 grid-rows-1 h-full gap-6">
                <Card title="Backlog" leads={backlogLeads(leads)} animationDelay={cardDelay(0)}/>
                <Card title="Active" leads={activeLeads(leads)} animationDelay={cardDelay(1)}/>
                <Card title="Lost" leads={lostLeads(leads)} animationDelay={cardDelay(2)}/>
                <Card title="Won" leads={wonLeads(leads)} animationDelay={cardDelay(3)}/>
            </div>
        </div>
    )
}
