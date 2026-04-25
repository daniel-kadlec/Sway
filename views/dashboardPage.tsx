import Card from "@/components/Card/card";
import Stats from "@/components/Stats/stats";
export default function DashboardPage() {
    return (
        <div className={'h-full'}>
            <div className="grid grid-cols-4 grid-rows-1 h-full gap-(--container-gap)">
                <Card title="Today's leads" variant="blue" className="col-span-2" />
                <Card title="Overdue" variant="red" />
                <Card title="Pending" variant="yellow" />
                <Stats className={'col-span-4'}/>
            </div>
        </div>
    );
}