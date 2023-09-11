import { Outlet, useLocation } from "react-router-dom";
import HeaderMenu from "./components/HeaderMenu";
import { useEffect, useState } from "react";
import BlueSpinner from "./components/BlueSpinner";
import { Navigate } from 'react-router-dom'

function MainLayout() {
    const [canOpen, setCanOpen] = useState(false);
    const [shouldToRedirect, setShouldToRedirect] = useState(false)
    const [shouldToRedirectToChat, setShouldToRedirectToChat] = useState(false);

    const location = useLocation();

    useEffect(() => {
        fetch("http://localhost:4500/auth/login")
            .then((res) => res.json())
            .then(res => {
                if (res.status) {
                    if (location.pathname != "/auth") {
                        setCanOpen(true);
                    } else {
                        setShouldToRedirectToChat(true);
                    }
                } else {
                    if (location.pathname != "/auth") {
                        setShouldToRedirect(true);
                    } else {
                        setCanOpen(true)
                    }
                }
            }).catch(err => { });
    }, []);

    if (shouldToRedirect) {
        return <Navigate to="/auth" />
    }

    if (shouldToRedirectToChat) {
        return <Navigate to="/" />
    }

    return (
        <div className="w-screen h-screen bg-[#082032] inline-flex justify-center items-center text-white">

            {canOpen ? (<div className="w-full lg:w-[60%] bg-[#2C394B] lg:rounded-xl flex flex-col h-screen lg:h-[80%] relative">
                {/* header */}
                <div className="bg-[#334756] p-2 lg:rounded-t-xl z-10 flex flex-row space-x-3 items-center justify-between absolute left-0 right-0 top-0">
                    <div className="flex flex-row items-center gap-2">
                        <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                        <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                        <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                    </div>
                    {location.pathname != "/auth" && (<HeaderMenu />)}
                </div>

                <div className="w-full h-full pt-10">
                    <Outlet />
                </div>
            </div>) : (<BlueSpinner />)}
        </div>
    );
}

export default MainLayout;