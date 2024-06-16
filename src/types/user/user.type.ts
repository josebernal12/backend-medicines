import { Document, Types } from "mongoose";

export type UserAuth = Document & {
  _id: string;
  name: string;
  email: string;
  password: string;
  token: string | null;
}
export type UserType = Omit<UserAuth, '_id'>  
export type UserAuthType = Pick<UserAuth, 'email' | 'password'>;

export type UserPayload = {
  _id: Types.ObjectId
}