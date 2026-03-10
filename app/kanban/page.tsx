import Card from "@/app/components/card";
import Recent from "@/app/components/recent";
export default function Kanban(){
    return(
        <div>
            <div className="grid grid-cols-4">
                <Card className={'col-span-1'}/>
                <Card className={'col-span-1'}/>
                <Card className={'col-span-1'}/>
                <Card className={'col-span-1'}/>
            </div>
            <Recent/>
        </div>
    )
}