import { config } from 'dotenv'
import OpenAI from 'openai'

config()

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function askOpenAI(prompt: string): Promise<string> {
  const response = await openai.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-4',
  })

  return response.choices[0].message.content || ''
}
