import express from 'express'
import cors from 'cors'
import authRouter from './routes/auth/authRoutes'
import userRouter from './routes/user/userRoutes'
import medicationsRouter from './routes/medications/MedicationsRoutes'


const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use('/api/medications', medicationsRouter)

export default app


