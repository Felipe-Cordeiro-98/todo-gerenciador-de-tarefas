import { Outlet } from "react-router-dom";
import Header from "../Header";

export default function Layout() {
    return (
        <div className="w-full h-screen">
            <Header />
            <div className="h-[calc(100vh-150px)] md:h-[calc(100vh-250px)]">
                <Outlet />
            </div>
        </div>
    );
}
