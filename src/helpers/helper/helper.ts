import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { UserPayload } from '../../types/user/user.type'
import { env } from '../config/envalid'
export class Helper {

  static hashPassword = (password: string) => {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    return hash
  }

  static compareHash = (password: string, hash: string) => {
    const isValid = bcrypt.compareSync(password, hash)
    if (isValid) {
      return true
    }
    return false
  }
  static generateToken = async (payload: UserPayload) => {
    const token = jwt.sign(payload, env.JWT_SECRET, {
      expiresIn: '180d'
    })
    return token
  }
  static transformNameRegularExpression = (name: string) => {
    const regex = new RegExp(`^${name}`, 'i');
    return regex;
  }
  

}