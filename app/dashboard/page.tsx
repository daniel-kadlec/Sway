import Card from "@/app/components/card";
import Stats from "@/app/components/stats";

export default function Dashoard() {
    return (
        <div>
            <div className="grid grid-cols-4">
                <Card className="col-span-2" />
                <Card className="col-span-1" />
                <Card className="col-span-1" />
            </div>
            <Stats className={'col-span-4'}/>
        </div>
    );
}