import express from 'express'
import cors from 'cors'
import authRouter from './routes/auth/authRoutes'
import userRouter from './routes/user/userRoutes'


const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
export default app


