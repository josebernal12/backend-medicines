import { Helper } from "../../helpers/helper/helper"
import { Validate } from "../../helpers/helper/validation"
import { ResponseApi } from "../../helpers/response/response"
import Auth from "../../models/auth/AuthModel"
import { ResponseType } from "../../types/response/response.types"
import { UserAuth } from "../../types/user/user.type"
import { uid } from "uid"
export class AuthService {

  static createUser = async (name: string, email: string, password: string): Promise<ResponseType<UserAuth>> => {
    try {
      const exist = await Validate.existEmail(email)
      if (exist) {
        const hash = Helper.hashPassword(password)
        const newUser = await Auth.create({ name, email, password: hash })
        if (!newUser) {
          return ResponseApi.error(true, 'error al crear usuario', 404)
        }
        const token = await Helper.generateToken({ _id: newUser._id })
        return ResponseApi.success<UserAuth>({
          error: false,
          message: 'se ha registrado exitosamente',
          data: newUser,
          token,
          status: 200
        })
      }

      return ResponseApi.error(true, 'ya existe el email', 404)
    } catch (error) {
      return ResponseApi.error(true, 'entro al catch', 500)

    }
  }
  static login = async (email: string, password: string): Promise<ResponseType<UserAuth>> => {
    try {
      const exist = await Validate.existEmail(email)
      if (exist) {
        const user = await Auth.findOne({ email })
        if (user) {
          const isValid = Helper.compareHash(password, user.password)
          if (isValid) {
            const token = await Helper.generateToken({ _id: user._id })
            return ResponseApi.success<UserAuth>({
              error: false,
              message: 'login exitosamente!',
              data: user,
              token,
              status: 200
            })
          }
        }
        return ResponseApi.error(true, 'email o password son incorrectos', 404)
      }
      return ResponseApi.error(true, 'email o password son incorrectos', 400)
    } catch (error) {
      return ResponseApi.error(true, 'entro al catch', 500)
    }
  }


  static recoverPassword = async (email: string): Promise<ResponseType<UserAuth>> => {
    try {
      const exist = await Validate.existEmail(email)
      if (exist) {
        const user = await Auth.findOne({ email })
        if (user) {
          user.token = uid(16);
          user.save();
          return ResponseApi.success<UserAuth>({ error: false, data: user, message: "hemos enviado el procedimiento a tu email", status: 200 })
        }

      }
      return ResponseApi.error(true, 'el email no existe en la base de datos', 404)
    } catch (error) {
      return ResponseApi.error(true, 'entro al catch', 500)
    }
  }

  static checkTokenEmail = async (token: string): Promise<ResponseType<UserAuth>> => {
    try {
      if (token) {
        const user = await Auth.findOne({ token });
        if (user) {
          return ResponseApi.success<UserAuth>({ error: false, data: user, message: "el token es valido", status: 200 })
        }
        return ResponseApi.error(true, 'el token no es valido', 404)
      }
      return ResponseApi.error(true, 'no existe token', 404)
    } catch (error) {
      return ResponseApi.error(true, 'entro al catch', 500)
    }
  }

  static changePassword = async (password: string, password_confirmation: string, token: string): Promise<ResponseType<UserAuth>> => {
    try {
      if (password !== password_confirmation) {
        return ResponseApi.error(true, "los passwords no coiciden", 404)
      }
      const user = await Auth.findOne({ token })

      if (user) {
        const userPassword = await Helper.hashPassword(user.password)
        user.password = userPassword
        user.token = null
        user.save();

        return ResponseApi.success<UserAuth>({ error: false, data: user, message: "el usuario ha cambiado de contraseña correctamente", status: 200 })
      }
      return ResponseApi.error(true, 'el token no es valido', 404)
    } catch (error) {
      return ResponseApi.error(true, 'entro al catch', 500);
    }
  }
}