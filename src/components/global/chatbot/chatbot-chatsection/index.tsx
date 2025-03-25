import React, { useEffect, useRef } from 'react'
import Message from '../messagecard'


const ChatSection = ({ chats }: { chats: CHATS }) => {
    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Scroll to the bottom whenever chats change
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chats]);


    return (
        <div ref={chatContainerRef}
            className='h-[400px] w-full overflow-y-auto no-scrollbar bg-gray-100 rounded-md flex flex-col p-4 gap-4 '>
            {
                chats.map((chat, index) => (
                    <Message key={index} isServer={chat.isServer} message={chat.message} />
                ))
            }
        </div>
    )
}

export default ChatSection