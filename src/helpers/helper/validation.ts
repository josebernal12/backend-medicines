import Auth from "../../models/auth/AuthModel"

export class Validate {

  static existEmail = async (email: string): Promise<boolean> => {
    try {
      const emailExist = await Auth.findOne({ email })
      if (!emailExist) {
        return true
      }
      return false
    } catch (error) {
      return false
    }
  }


}