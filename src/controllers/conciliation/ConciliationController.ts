import { Request, Response } from 'express'
import { ConciliationEndpoint } from '../../types/conciliation/conciliation';
import { ConciliationServices } from '../../service/conciliation/ConciliationServices';
import { RequestExt } from '../../types/request/requestExt';
export class ConciliationController {

    static async create(req: RequestExt, res: Response) {
        const conciliation: ConciliationEndpoint = req.body
        const response = await ConciliationServices.create(req.user?.id, conciliation);
        res.status(response.status).json({
            error: response.error,
            message: response.message,
            data: response.data,
        })
    }

    static async update(req: RequestExt, res: Response) {
        const { id } = req.params
        const conciliation: ConciliationEndpoint = req.body
        const response = await ConciliationServices.update(id, req.user?.id, conciliation);
        res.status(response.status).json({
            error: response.error,
            message: response.message,
            data: response.data,
        })
    }

    static async deleteById(req: RequestExt, res: Response) {
        const { id } = req.params;
        const response = await ConciliationServices.delete(id, req.user?.id);
        res.status(response.status).json({
            error: response.error,
            message: response.message,
            data: response.data,
            status: response.status
        })
    }

    static async getAll(req: RequestExt, res: Response) {
        const response = await ConciliationServices.getAll(req.user?.id)
        res.status(response.status).json({
            error: response.error,
            message: response.message,
            data: response.data,
            status: response.status
        })
    }

    static async getById(req: RequestExt, res: Response) {
        const { id } = req.params
        const response = await ConciliationServices.getById(id, req.user?.id)
        res.status(response.status).json({
            error: response.error,
            message: response.message,
            data: response.data,
            status: response.status,
        })
    }
}