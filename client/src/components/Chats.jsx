import { useEffect, useRef } from "react";
import Chat from "./Chat";

function Chats ({chats=[]}) {
    const chatContainerRef = useRef(null);

    useEffect(() => {
        // Scroll to the bottom when the component mounts
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }, [chats]);

    return (
        <div
            className="p-2 h-full overflow-y-scroll overflow-x-hidden flex flex-col gap-3"
            ref={chatContainerRef}
        >
            {chats.map((chat)=>{
                return (<Chat />)
            })}
        </div>
    );
}

export default Chats;