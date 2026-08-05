import DashboardPage from "@/views/dashboardPage";
import {Metadata} from "next";

export const metadata:Metadata = {
    title: "Sway",
    description: "Dashboard"
};
export default function Dashoard() {
    return (
        <DashboardPage/>
    );
}