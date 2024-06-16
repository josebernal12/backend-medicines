import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";
export type RequestExt = Request & {
    user?: JwtPayload | { id: string }
};