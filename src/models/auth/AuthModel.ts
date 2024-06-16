import mongoose, { Schema } from 'mongoose'
import { UserAuth } from '../../types/user/user.type'

const AuthSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  token: {
    type: String,
    default: null,
    trim: true
  }
})

const Auth = mongoose.model<UserAuth>('User', AuthSchema)

export default Auth