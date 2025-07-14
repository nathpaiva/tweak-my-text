import OpenAI from 'openai'
import { ChatCompletionMessageParam } from 'openai/resources/chat'

export async function execHello(input: string) {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    console.error('❌ Missing OPENAI_API_KEY environment variable.')
    process.exit(1)
  }

  const openai = new OpenAI({ apiKey })

  const messages: ChatCompletionMessageParam[] = [
    { role: 'user', content: input },
  ]

  const res = await openai.chat.completions.create({
    model: 'gpt-4',
    messages,
  })

  const reply = res.choices[0].message.content
  console.log(reply)
  return reply
}
