import Card from "@/components/Card/card";
import { getLeads } from "@/lib/utils/data/leads";
import { todaysLeads, overdueLeads, pendingLeads} from "@/lib/utils/filters/leadfilters";

export default async function DashboardPage() {

 const leads = await getLeads()

    return (
        <div className={'p-12 w-full'}>
            <div className="grid grid-cols-3 grid-rows-1 h-full gap-(--container-gap)">
                <Card title="Today's leads" leads={todaysLeads(leads)} primary={true}/>
                <Card title="Overdue" leads={overdueLeads(leads)}/>
                <Card title="Pending" leads={pendingLeads(leads)}/>
            </div>
        </div>
    );
}
