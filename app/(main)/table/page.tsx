import TablePage from "@/views/tablePage";
import {Metadata} from "next";

export const metadata:Metadata = {
    title: "Sway",
    description: "Records"
};
export default function Table() {
    return (
        <TablePage/>
    );
}