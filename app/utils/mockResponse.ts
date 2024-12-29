import { ChatMessage } from 'ai/react'

export function getMockResponse(messages: ChatMessage[]): string {
  const userMessage = messages[messages.length - 1].content.toLowerCase()
  
  if (userMessage.includes('hello') || userMessage.includes('hi')) {
    return "Woof woof! Hello there, hooman! I'm pawsitively excited to chat with you! What's wagging in your world today?"
  }
  
  if (userMessage.includes('how are you')) {
    return "I'm doggone great! My tail's wagging at maximum speed. How about you? Feeling as happy as a dog with two tails?"
  }
  
  if (userMessage.includes('treat') || userMessage.includes('food')) {
    return "Did someone say treats? My ears perked up faster than you can say 'squirrel'! I'm always ready for a snack-attack!"
  }
  
  if (userMessage.includes('play') || userMessage.includes('walk')) {
    return "Play time? Walk? Oh boy, oh boy, oh boy! I'm so excited I might just chase my tail! Let's go on an adventure!"
  }
  
  return "Arf arf! That's pawsome! I'm not sure what to say, but I'm wagging my tail anyway. Can we play fetch or something?"
}

