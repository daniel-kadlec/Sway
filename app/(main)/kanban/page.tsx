import KanbanPage from "@/views/kanbanPage";
import {Metadata} from "next";

export const metadata:Metadata = {
    title: "Sway",
    description: "Board"
};
export default function Kanban(){
    return(
        <KanbanPage/>
    )
}