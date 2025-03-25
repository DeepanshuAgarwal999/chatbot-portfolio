import Image from 'next/image';
import React from 'react';
import { Div } from '../../motion';

const Message = ({ isServer, message }: { isServer: boolean, message: string }) => {
    const messageVariants = {
        hidden: { opacity: 0, y: 20 }, // Initial state (hidden)
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }, // Animate to visible
    };

    switch (isServer) {
        case true:
            return (
                <Div
                    className='flex gap-1'
                    initial="hidden"
                    animate="visible"
                    variants={messageVariants}
                >
                    <Image src={'/images/chatbot.png'} alt='chatbot' width={20} height={20} className='size-8' />
                    <div className={`w-fit max-w-64 rounded-md bg-black px-4 py-2 ${isServer ? 'self-start' : ''}`}>
                        <p className='text-white text-sm break-words'>{message}</p>
                    </div>
                </Div>
            );
        case false:
            return (
                <Div
                    className={`w-fit max-w-64 rounded-md bg-white px-4 py-2 ${isServer ? '' : 'self-end'}`}
                    initial="hidden"
                    animate="visible"
                    variants={messageVariants}
                >
                    <p className='text-gray-500 break-words'>{message}</p>
                </Div>
            );
    }
};

export default Message;