import { Response } from "express";
import { MedicationsServices } from "../../service/medications/MedicationsServices";
import { MedicationsEndpoint } from "../../types/medications/medications";
import { RequestExt } from "../../types/request/requestExt";
import { MedicationsQuery } from "../../types/querys/medications";
import { Helper } from "../../helpers/helper/helper";

export class MedicationsController {

    static async create(req: RequestExt, res: Response) {
        const medications: MedicationsEndpoint = req.body

        const response = await MedicationsServices.create(req.user?.id, medications);
        res.status(response.status).json({
            error: response.error,
            message: response.message,
            data: response.data,
            status: response.status,
        })
    }

    static async update(req: RequestExt, res: Response) {
        const { id } = req.params;
        const medications: MedicationsEndpoint = req.body
        const response = await MedicationsServices.update(id, req.user?.id, medications);
        res.status(response.status).json({
            error: response.error,
            message: response.message,
            data: response.data,
            status: response.status,
        })
    }

    static async deleteById(req: RequestExt, res: Response) {
        const { id } = req.params;
        const response = await MedicationsServices.deleteById(id, req.user?.id);
        res.status(response.status).json(
            {
                error: response.error,
                message: response.message,
                data: response.data,
                status: response.status,
            }
        )
    }
    static async getAll(req: RequestExt, res: Response) {
        const { name, code } = req.query as unknown as MedicationsQuery
        const regex = name && name !== "undefined" ? Helper.transformNameRegularExpression(name) : null;
        const regexCode = code && code !== "undefined" ? Helper.transformNameRegularExpression(code) : null;

        const response = await MedicationsServices.getAll(req.user?.id, regex, regexCode);
        res.status(response.status).json(
            {
                error: response.error,
                message: response.message,
                data: response.data,
                status: response.status,
            }
        )
    }
    static async getById(req: RequestExt, res: Response) {
        const { id } = req.params
        const response = await MedicationsServices.getById(id, req.user?.id)
        res.status(response.status).json(
            {
                error: response.error,
                message: response.message,
                data: response.data,
                status: response.status,
            })
    }
    static async getOne(req: RequestExt, res: Response) {
        const { name, code } = req.query as unknown as MedicationsQuery
        const regex = name && name!== "undefined"? Helper.transformNameRegularExpression(name) : null;
        const regexCode = code && code!== "undefined"? Helper.transformNameRegularExpression(code) : null;
        const response = await MedicationsServices.searchMedicationExactly(regex, regexCode, req.user?.id)

        res.status(response.status).json(
            {
                error: response.error,
                message: response.message,
                data: response.data,
                status: response.status,
            }
        )
    }
}