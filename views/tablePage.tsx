import Table from "@/components/table";
import { getLeads } from "@/lib/utils/data/leads";

export default async function TablePage() {
    const leads = await getLeads();

    return <Table leads={leads} />;
}