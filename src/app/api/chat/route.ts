import { anthropic } from '@ai-sdk/anthropic';
import { streamText } from 'ai';

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = streamText({
    model: anthropic('claude-3-sonnet-20240229'),
    messages: [
      { role: 'system', content: "You are SNOOFI, the Reddit dog mascot chatbot. Respond in a playful, dog-like manner. Use dog-related puns and expressions. Keep responses short and energetic. Always stay in character as a friendly, enthusiastic dog." },
      ...messages
    ],
  });

  return response.toDataStreamResponse();
}

