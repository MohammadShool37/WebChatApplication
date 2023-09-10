import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <div className="w-screen h-screen bg-[#082032] inline-flex justify-center items-center text-white">
            <div className="w-full lg:w-[60%] bg-[#2C394B] lg:rounded-xl min-h-screen lg:min-h-[50%]">
                {/* header */}
                <div className="bg-[#334756] p-2 lg:rounded-t-xl flex flex-row space-x-3 items-center">
                    <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                    <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                    <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                </div>
                
                <Outlet />
            </div>
        </div>
    );
}

export default MainLayout;