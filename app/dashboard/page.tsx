import Card from "@/app/components/card";
import Stats from "@/app/components/stats";
export default function Dashoard() {
    return (
        <div className={'h-full'}>
            <div className="grid grid-cols-4 grid-rows-1 h-full gap-6">
                <Card className="col-span-2" />
                <Card className="col-span-1" />
                <Card className="col-span-1" />
                <Stats className={'col-span-4'}/>
            </div>
        </div>
    );
}