'use client'

import { useState } from 'react'
import { useChat } from 'ai/react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChatBanner } from '@/components/ChatBanner'

export default function SNOOFIChat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()
  const [isTyping, setIsTyping] = useState(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsTyping(true)
    handleSubmit(e).finally(() => setIsTyping(false))
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
          <form onSubmit={onSubmit} className="flex w-full space-x-2">
            <Input
              value={input}
              onChange={handleInputChange}
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

