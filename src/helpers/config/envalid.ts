import 'dotenv/config'
import { cleanEnv, str, port } from 'envalid'

export const env = cleanEnv(process.env, {
  DATABASE_URL: str(),
  JWT_SECRET: str(),
  PORT: port()
})