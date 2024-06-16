import { ResponseApi } from "../../helpers/response/response"
import Auth from "../../models/auth/AuthModel"
import { UserAuth } from "../../types/user/user.type"

export class UserUtils {

    static async getAll (name: RegExp | null, showAll: number | null, quantity: number | null ) {
        if (name) {
            if (quantity) {
                const users = await Auth.find({ name }).limit(quantity)
                return ResponseApi.success<UserAuth>({ error: false, data: users, message: "usuarios encontrados", status: 200 })
            }
            const users = await Auth.find({ name }).limit(10)
            return ResponseApi.success<UserAuth>({ error: false, data: users, message: "usuarios encontrados", status: 200 })
        }
        if (showAll === 1) {
            const users = await Auth.find()
            return ResponseApi.success<UserAuth>({ error: false, data: users, message: "usuarios encontrados", status: 200 })
        }
        if (quantity) {
            const users = await Auth.find().limit(quantity)
            return ResponseApi.success<UserAuth>({ error: false, data: users, message: "usuarios encontrados", status: 200 })
        }
        const users = await Auth.find().limit(10)
        return ResponseApi.success<UserAuth>({ error: false, data: users, message: "usuarios encontrados", status: 200 })
    }
}