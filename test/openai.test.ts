import { describe, expect, it } from 'vitest'
import { askOpenAI } from '../src/openai'

describe('askOpenAI', () => {
  it('returns a non-empty response', async () => {
    const response = await askOpenAI('Say hello in one sentence.')
    expect(response.length).toBeGreaterThan(0)
  }, 10_000)
})
