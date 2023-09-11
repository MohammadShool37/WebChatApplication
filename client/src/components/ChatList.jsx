import { Avatar, Button, IconButton, Input, List, ListItem, ListItemPrefix, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function ChatList({ children, chats=[], onChatClick = ()=>{} }) {
    return (
        <div className="w-full h-full flex flex-row">
            <div className="flex-1 bg-[#172129] rounded-bl-lg p-1 hidden lg:flex flex-col items-center">
                <SearchForm />
                <div className="w-full h-full overflow-y-scroll">
                    <Chats chats={chats} onClick={onChatClick} />
                </div>
            </div>
            <div className="flex-[2] relative">
                {children}
            </div>
        </div>
    )
}

function SearchForm() {
    const [email, setEmail] = useState("");
    const onChange = ({ target }) => setEmail(target.value);

    return (
        <div className="relative flex w-full max-w-[95%]">
            <Input
                type="text"
                variant="static"
                color="white"
                placeholder="Type Something ..."
                value={email}
                onChange={onChange}
            />
            <IconButton className="bg-transparent !absolute drop-shadow-none right-0">
                <FaSearch />
            </IconButton>
        </div>
    );
}

function Chats({ chats = [], onClick=()=>{} }) {
    return (
        <List>
            {chats.map(chat => {
                return (
                    <ListItem onClick={()=>onClick (chat)} key={chat.id}>
                        <ListItemPrefix>
                            <Avatar variant="circular" alt="" src={`/images/avatar${chat.creator.avatar_id}.png`} />
                        </ListItemPrefix>
                        <div>
                            <Typography variant="h6" color="white">
                                {chat.creator.username}
                            </Typography>
                            <Typography variant="small" color="white" className="font-normal text-[#6a6a6a]">
                                {chat.chats [chat.chats.length - 1].msg}
                            </Typography>
                        </div>
                    </ListItem>
                );
            })}
        </List>
    )
}

export default ChatList;