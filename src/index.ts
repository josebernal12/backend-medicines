import { connectDB } from './database/config'
import { env } from './helpers/config/envalid'
import server from './server'
import colors from 'colors'
//TODOS: GETALL BUSCAR POR NAME Y MAS
const port = env.PORT || 4000


server.listen(port, async () => {
  await connectDB()
  console.log(colors.cyan.bold(`server listening to port ${port}`))
})
