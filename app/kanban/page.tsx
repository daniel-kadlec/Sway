import Card from "@/app/components/card";
import Recent from "@/app/components/Recent/recent";
export default function Kanban(){
    return(
        <div className={'h-full'}>
            <div className="grid grid-cols-4 grid-rows-1 h-full gap-6">
                <Card className={'col-span-1'}/>
                <Card className={'col-span-1'}/>
                <Card className={'col-span-1'}/>
                <Card className={'col-span-1'}/>
                <Recent className={'col-span-4'}/>
            </div>
        </div>
    )
}