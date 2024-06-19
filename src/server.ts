import express from 'express'
import cors from 'cors'
import authRouter from './routes/auth/authRoutes'
import userRouter from './routes/user/userRoutes'
import medicationsRouter from './routes/medications/MedicationsRoutes'
import compression from "compression"
import { env } from './helpers/config/envalid'

const isProduction = env.NODE_ENV === 'production';

const corsOptions = {
    origin: isProduction ? env.FRONTEND_PRODUCTION : env.FRONTEND_URL,
    credentials: true,
}

const app = express()
app.use(cors(corsOptions))
app.use(express.json())
app.use(compression())
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use('/api/medications', medicationsRouter)

export default app


