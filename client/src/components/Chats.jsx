import { useEffect, useRef } from "react";
import Chat from "./Chat";

function Chats() {
    const chatContainerRef = useRef(null);

    useEffect(() => {
        // Scroll to the bottom when the component mounts
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }, []);

    return (
        <div
            className="p-2 h-full overflow-y-scroll overflow-x-hidden flex flex-col gap-3"
            ref={chatContainerRef}
        >
            <Chat />
            <Chat />
            <Chat />
            <Chat isMine />
            <Chat />
            <Chat />
            <Chat />
            <Chat isMine />
            <Chat />
            <Chat />
            <Chat />
            <Chat isMine />
            <Chat />
            <Chat />
            <Chat />
            <Chat isMine />
            <Chat />
            <Chat />
            <Chat />
            <Chat isMine />
        </div>
    );
}

export default Chats;