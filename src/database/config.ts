import mongoose from 'mongoose'
import colors from 'colors'
import { exit } from 'node:process';
import { env } from '../helpers/config/envalid';

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(env.DATABASE_URL)
    const url = `${connection.connection.host}:${connection.connection.port}`
    console.log(colors.magenta.bold(`Mongo Db conectado en ${url}`));
  } catch (error) {
    console.log(error)
    exit(1)
  }
}