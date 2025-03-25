'use client'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import React, { useState } from 'react'
import ChatbotInputField from './chatbot-inputfield'
import ChatSection from './chatbot-chatsection'

const Chatbot = () => {
    const [chat, setChat] = useState<CHATS>([])
    return (
        <Card className='w-full max-w-[420px]'>
            <CardHeader>
                <h2 className='text-2xl font-bold'>Chatbot</h2>
            </CardHeader>
            <CardContent>
                <ChatSection chats={chat} />
            </CardContent>
            <CardFooter>
                <ChatbotInputField setChat={setChat} />
            </CardFooter>
        </Card>
    )
}

export default Chatbot