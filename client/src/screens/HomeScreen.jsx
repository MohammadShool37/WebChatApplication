import { useState } from "react";
import Chat from "../components/Chat";
import ChatList from "../components/ChatList";
import Chats from "../components/Chats";
import SendMessage from "../components/SendMessage";

const UsersData = [
    {
        "id": "100",
        "username": "MohammadShool37",
        "avatar_id": 3
    }
]

const ChatsData = [
    {
        "id": "100",
        "creator_id": "100",
        "joins": [
            "100"
        ],
        "creator": {
            "id": "100",
            "username": "MohammadShool37",
            "avatar_id": 3
        },
        "chats": [
            {
                "msg": "hello mohammad how are you?"
            },
            {
                "msg": "hello mohammad how are you?"
            },
            {
                "msg": "hello mohammad how are you?"
            },
            {
                "msg": "hello mohammad how are you?"
            },
            {
                "msg": "hello mohammad how are you?"
            },
            {
                "msg": "hello mohammad how are you?"
            },
            {
                "msg": "hello mohammad how are you?"
            },
            {
                "msg": "hello mohammad how are you?"
            },
            {
                "msg": "hello mohammad how are you?"
            },
            {
                "msg": "hello mohammad how are you?"
            },
            {
                "msg": "hello mohammad how are you?"
            },
            {
                "msg": "hello mohammad how are you?"
            },
            {
                "msg": "hello mohammad how are you?"
            },
        ]
    }
]

function HomeScreen() {
    const [chats, setChats] = useState ([]);

    const onChatClick = (chat) => {
        setChats (chat.chats);
    }
    
    return (
        <ChatList onChatClick={onChatClick} chats={ChatsData}>
            <Chats chats={chats} />
            <SendMessage />
        </ChatList>
    )
    
}

export default HomeScreen;