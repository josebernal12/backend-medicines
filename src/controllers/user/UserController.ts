import { Request, Response } from 'express';
import { UserService } from '../../service/user/UserService';
import { Helper } from '../../helpers/helper/helper';

type QueryParams = {
    name: string;
    showAll: string; // Las consultas de URL son siempre cadenas
    quantity: string; // Las consultas de URL son siempre cadenas
}

export class UserController {

    static async getAll(req: Request<{}, {}, {}, QueryParams>, res: Response) {
        const { name, showAll, quantity } = req.query
        const regex = name && name !== "undefined" ? Helper.transformNameRegularExpression(name) : null;
        const showAllNumber = parseInt(showAll, 10);
        const quantityNumber = parseInt(quantity, 10);

        const response = await UserService.getAll(regex, showAllNumber, quantityNumber)

        res.status(response.status).json({
            error: response.error,
            message: response.message,
            data: response.data,
            status: response.status,
        })
    }
    static async getById(req: Request, res: Response) {
        const { id } = req.params
        const response = await UserService.getById(id)

        res.status(response.status).json({
            error: response.error,
            message: response.message,
            data: response.data,
            status: response.status,
        })
    }
    static async update(req: Request, res: Response) {
        const { id } = req.params;
        const { name, email } = req.body;
        const response = await UserService.update(id, name, email);
        res.status(response.status).json({
            error: response.error,
            message: response.message,
            data: response.data,
            status: response.status,
        })
    }

    static async deleteById(req: Request, res: Response) {
        const { id } = req.params;
        const response = await UserService.deleteById(id);
        res.status(response.status).json({
            error: response.error,
            message: response.message,
            data: response.data,
            status: response.status
        })
    }
}