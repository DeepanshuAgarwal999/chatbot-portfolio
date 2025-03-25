'use client'

import { getAnswer } from '@/actions/openai.action'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { LoaderCircle } from 'lucide-react'
import React, { useState } from 'react'

const ChatbotInputField = ({ setChat }: { setChat: React.Dispatch<React.SetStateAction<CHATS>> }) => {
    const [fetching, setFetching] = useState(false)
    const [message, setMessage] = useState('')
    const handleSubmit = async () => {
        if (message.trim() === '') {
            return
        }
        setChat((prevState: any) => [...prevState, { isServer: false, message }])
        setFetching(true)
        const response = await getAnswer(message)
        setChat((prevState: any) => [...prevState, { isServer: true, message: response }])
        setMessage('')
        setFetching(false)
    }
    return (
        <form className='flex items-center gap-4 w-full'>
            <Input className='flex-1' placeholder='Ask about Deepanshu Agarwal' value={message} onChange={(e) => setMessage(e.target.value)} />
            <Button className='bg-primary cursor-pointer text-white px-4 py-2 rounded-md' onClick={handleSubmit} disabled={fetching}>
                {fetching ? <><LoaderCircle className='animate-spin size-4' /> wait</> : 'Send'}
            </Button>
        </form>
    )
}

export default ChatbotInputField