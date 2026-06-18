import Card from "@/components/Card/card";
import Stats from "@/components/Stats/stats";
import { getLeads } from "@/lib/utils/data/leads";
import { todaysLeads, overdueLeads, pendingLeads} from "@/lib/utils/filters/leadfilters";

export default async function DashboardPage() {

 const leads = await getLeads()

    return (
        <div className={'h-full'}>
            <div className="grid grid-cols-4 grid-rows-1 h-full gap-(--container-gap)">
                <Card title="Today's leads" variant="blue" leads={todaysLeads(leads)} className="col-span-2" />
                <Card title="Overdue" variant="red" leads={overdueLeads(leads)}/>
                <Card title="Pending" variant="yellow" leads={pendingLeads(leads)}/>
                <Stats className={'col-span-4'}/>
            </div>
        </div>
    );
}
