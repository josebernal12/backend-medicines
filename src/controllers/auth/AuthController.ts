import type { Request, Response } from 'express'
import { AuthService } from '../../service/auth/AuthService'
import { UserAuthType, UserType } from '../../types/user/user.type'
export class AuthController {

  static createAccount = async (req: Request, res: Response) => {
    const { name, email, password }: UserType = req.body
    const response = await AuthService.createUser(name, email, password)
    res.status(response.status).json({
      error: response.error,
      message: response.message,
      data: response.data,
      token: response.token,
      status: response.status
    })
  }

  static login = async (req: Request, res: Response) => {
    const { email, password }: UserAuthType = req.body
    const response = await AuthService.login(email, password)
    res.status(response.status).json({
      error: response.error,
      message: response.message,
      data: response.data,
      token: response.token,
      status: response.status
    })
  }

  static recoverPassword = async (req: Request, res: Response) => {
    const { email }: { email: string } = req.body
    const response = await AuthService.recoverPassword(email)
    res.status(response.status).json({
      error: response.error,
      message: response.message,
      data: response.data,
      status: response.status
    })
  }
  static checkTokenEmail = async (req: Request, res: Response) => {
    const { token } = req.params
    const response = await AuthService.checkTokenEmail(token)
    res.status(response.status).json({
      error: response.error,
      message: response.message,
      data: response.data,
      status: response.status
    })
  }
  static changePassword = async (req: Request, res: Response) => {
    const { password, confirmPassword }: { password: string, confirmPassword: string } = req.body
    const { token } = req.params
    const response = await AuthService.changePassword(password, confirmPassword, token)
    res.status(response.status).json({
      error: response.error,
      message: response.message,
      data: response.data,
      status: response.status
    })
  }
}