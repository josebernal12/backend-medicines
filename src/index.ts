import { connectDB } from './database/config'
import { env } from './helpers/config/envalid'
import server from './server'
import colors from 'colors'

const port = env.PORT || 8080


server.listen(port, async () => {
  await connectDB()
  console.log(colors.cyan.bold(`server listening to port ${port}`))
})
