import jwt from 'jsonwebtoken';
import { Response, NextFunction } from 'express';
import Auth from '../../models/auth/AuthModel';
import { env } from '../../helpers/config/envalid';
import { RequestExt } from '../../types/request/requestExt';
import { ResponseApi } from '../../helpers/response/response';

const getTokenFromHeader = (req: RequestExt): string | null => {
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        return req.headers.authorization.split(' ')[1];
    }
    return null;
};


const getUserFromToken = async (token: string) => {
    const decoded = jwt.verify(token, env.JWT_SECRET, { ignoreExpiration: true }) as { _id: string };
    return Auth.findById(decoded._id).select('-password');
};

export const checkJwtToken = async (req: RequestExt, res: Response, next: NextFunction) => {
    const token = getTokenFromHeader(req);

    if (!token) {
        return res.status(401).json({ msg: 'Token no válido' });
    }

    try {
        console.log(token)
        const user = await getUserFromToken(token);

        if (!user) {
            return res.status(401).json({ msg: 'Usuario no encontrado' });
        }

        req.user = user; // Almacenar el usuario en el objeto de solicitud
        next(); // Pasar al siguiente middleware
    } catch (error) {
        console.error('Error al verificar el token:', error);
        ResponseApi.error(true, "Error al verificar el token", 404)
    }
};
