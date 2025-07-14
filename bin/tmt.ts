#!/usr/bin/env tsx
import { config } from 'dotenv'
import { execHello } from '../src/commands/hello'

config()

const args = process.argv.slice(2)

if (args[0] === 'hello' && args[1]) {
  const message = args.slice(1).join(' ')
  execHello(message)
} else {
  console.log('Usage: tmt hello "Your message"')
}
