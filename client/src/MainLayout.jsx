import { IconButton } from "@material-tailwind/react";
import { FaBars } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import SidebarDrawer from "./components/SidebarDrawer";
import { useState } from "react";
import HeaderMenu from "./components/HeaderMenu";

function MainLayout() {
    return (
        <div className="w-screen h-screen bg-[#082032] inline-flex justify-center items-center text-white">
            <div className="w-full lg:w-[60%] bg-[#2C394B] lg:rounded-xl flex flex-col h-screen lg:h-[80%] relative">
                {/* header */}
                <div className="bg-[#334756] p-2 lg:rounded-t-xl z-10 flex flex-row space-x-3 items-center justify-between absolute left-0 right-0 top-0">
                    <div className="flex flex-row items-center gap-2">
                        <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                        <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                        <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                    </div>
                    <HeaderMenu />
                </div>

                <div className="w-full h-full pt-10">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default MainLayout;