import Chat from "../components/Chat";
import ChatList from "../components/ChatList";
import Chats from "../components/Chats";
import SendMessage from "../components/SendMessage";

function HomeScreen() {
    return (
        <ChatList>
            <Chats />
            <SendMessage />
        </ChatList>
    )
}

export default HomeScreen;