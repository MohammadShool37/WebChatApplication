import { Drawer, List, ListItem, ListItemPrefix, Typography } from "@material-tailwind/react";
import { FaBookmark, FaCommentAlt, FaUser } from "react-icons/fa";

function SidebarDrawer ({open=false,onClose=()=>{}})
{
    return (
        <Drawer className="bg-[#2C394B]" open={open} onClose={onClose}>
            <div className="px-4 mt-4">
                <Typography className="font-bold" as="h3">
                    Menu
                </Typography>
            </div>
            <List>
                <ListItem className="text-white">
                    <ListItemPrefix>
                        <FaCommentAlt />
                    </ListItemPrefix>
                    Chats
                </ListItem>
                <ListItem className="text-white">
                    <ListItemPrefix>
                        <FaUser />
                    </ListItemPrefix>
                    Profile
                </ListItem>
            </List>
        </Drawer>
    );
}

export default SidebarDrawer;