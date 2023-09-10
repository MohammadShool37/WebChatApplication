import { Typography } from "@material-tailwind/react";

function Chat({ isMine = false }) {
    return (
        <div className={`flex ${isMine ? "justify-end" : "justify-start"} items-center`}>
            <div className={`${isMine ? "bg-[#3bb662]" : "bg-[#082032]"} py-2 pl-2 pr-10 rounded w-fit relative`}>
                <Typography as="p">
                    hello mohammad
                </Typography>
                <Typography className="font-normal text-[10px] text-gray-700 absolute bottom-0 right-2" as="p">
                    09:08
                </Typography>
                {isMine ? (
                <div className="absolute w-4 h-4 bottom-0 -right-3 border-t-[15px] border-t-transparent border-b-[5px] border-b-transparent border-l-[10px] border-l-[#3bb662]" />) : (
                    <div className="absolute w-4 h-4 bottom-0 -left-3 border-t-[15px] border-t-transparent border-b-2 border-b-transparent border-r-[10px] border-r-[#082032]" />)}
            </div>
        </div>
    )
}

export default Chat;