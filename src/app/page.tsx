'use server'

import { useState } from 'react'
import { Message } from 'ai/react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChatBanner } from '@/components/ChatBanner'
import { getMockResponse } from '../../app/utils/mockResponse'

export default function SNOOFIChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = { id: String(Date.now()), role: 'user', content: input }
    setMessages(prevMessages => [...prevMessages, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    const botMessage: Message = {
      id: String(Date.now() + 1),
      role: 'assistant',
      content: getMockResponse([...messages, userMessage])
    }
    setMessages(prevMessages => [...prevMessages, botMessage])
    setIsTyping(false)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#DAE0E6] p-4">
      <Card className="w-full max-w-3xl">
        <ChatBanner />
        <CardContent className="p-4">
          <ScrollArea className="h-[60vh]">
            {messages.map(m => (
              <div key={m.id} className={`mb-4 ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg font-mono ${m.role === 'user' ? 'bg-[#FF4500] text-white' : 'bg-[#FFE9E3] text-[#FF4500]'}`}>
                  {m.content}
                </span>
              </div>
            ))}
            {isTyping && (
              <div className="text-left">
                <span className="inline-block p-2 rounded-lg bg-[#FFE9E3] text-[#FF4500] font-mono">
                  SNOOFI is typing...
                </span>
              </div>
            )}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <form onSubmit={handleSubmit} className="flex w-full space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Say something to SNOOFI..."
              className="flex-grow font-mono"
            />
            <Button type="submit" disabled={isTyping} className="bg-[#FF4500] hover:bg-[#FF6A33] font-mono">
              Send
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  )
}

