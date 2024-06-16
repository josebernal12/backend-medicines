import { ResponseType } from "../../types/response/response.types"

export class ResponseApi {

  static async success<T>(response: ResponseType<T>): Promise<ResponseType<T>> {
    return response
  }
  static async error(error: boolean, message: string, status: number) {
    return {
      error,
      message,
      status
    }
  }
}