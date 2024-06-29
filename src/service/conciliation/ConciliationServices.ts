import { ResponseApi } from "../../helpers/response/response";
import Conciliation from "../../models/conciliation/Concilitation";
import { ConciliationEndpoint, ConciliationType } from "../../types/conciliation/conciliation";
import { ResponseType } from "../../types/response/response.types";

export class ConciliationServices {

    static async create(userId: string, {
        name,
        code,
        mainTableData,
        secondTableData,
        fiveTableData,
        tableMerma,
        tableAcondicionado,
        hermes,
        tableTeleCamara,
        tableTeleCamara0,
        tableFour,
        factor,
        lastTable,
        tableSumatoria,
        perfomance
    }: ConciliationEndpoint): Promise<ResponseType<ConciliationType>> {
        console.log(tableAcondicionado)
        try {
            const conciliation = await Conciliation.create({
                name,
                code,
                mainTableData,
                secondTableData,
                fiveTableData,
                tableMerma,
                tableAcondicionado,
                hermes,
                tableTeleCamara,
                tableTeleCamara0,
                tableFour,
                factor,
                lastTable,
                tableSumatoria,
                userId,
                perfomance
            })
            if (conciliation) {
                if (conciliation.userId.toString() === userId) {
                    return ResponseApi.success<ConciliationType>({ error: false, data: conciliation, message: "conciliacion creada", status: 200 })
                }
                return ResponseApi.error(true, 'el usuario no puede crear una conciliacion de otro usuario', 400)
            }
            return ResponseApi.error(true, 'error al crear conciliacion', 400)
        } catch (error) {
            return ResponseApi.error(true, 'entro al catch', 500)
        }
    }

    static async update(id: string, userId: string, {
        name,
        code,
        mainTableData,
        secondTableData,
        fiveTableData,
        tableMerma,
        tableAcondicionado,
        hermes,
        tableTeleCamara,
        tableTeleCamara0,
        tableFour,
        factor,
        lastTable,
        tableSumatoria,
        perfomance
    }: ConciliationEndpoint): Promise<ResponseType<ConciliationType>> {
        try {
            if (id && userId) {
                const conciliation = await Conciliation.findById(id)

                if (conciliation) {
                    if (conciliation.userId.toString() === userId) {
                        const update = await Conciliation.findByIdAndUpdate(id, {
                            name,
                            code,
                            mainTableData,
                            secondTableData,
                            fiveTableData,
                            tableMerma,
                            tableAcondicionado,
                            hermes,
                            tableTeleCamara,
                            tableTeleCamara0,
                            tableFour,
                            factor,
                            lastTable,
                            tableSumatoria,
                            userId,
                            perfomance
                        }, { new: true })
                        if (update) {
                            return ResponseApi.success<ConciliationType>({ error: false, data: conciliation, message: "conciliacion actualizada", status: 200 })
                        }
                        return ResponseApi.error(true, 'error al actualizar la conciliacion', 400)
                    }
                    return ResponseApi.error(true, 'el usuario no tiene permiso para actualizar otra conciliacion que no le pertenece', 404)
                }
                return ResponseApi.error(true, 'error al actualizar la conciliacion', 400)
            }
            return ResponseApi.error(true, 'id no existe', 400)
        } catch (error) {
            return ResponseApi.error(true, 'entro al catch', 500)
        }
    }

    static async delete(id: string, userId: string): Promise<ResponseType<ConciliationType>> {
        try {
            if (id && userId) {
                const conciliation = await Conciliation.findById(id)
                if (conciliation) {
                    if (conciliation.userId.toString() === userId) {
                        const deleted = await Conciliation.findByIdAndDelete(id)
                        if (deleted) {
                            return ResponseApi.success<ConciliationType>({ error: false, data: deleted, message: "conciliacion eliminada", status: 200 })
                        }
                        return ResponseApi.error(true, 'error al eliminar la conciliacion', 400)
                    }
                }
                return ResponseApi.error(true, 'error al traer la conciliacion', 404)
            }

            return ResponseApi.error(true, 'id no existe o UserId no existe', 400)
        } catch (error) {
            return ResponseApi.error(true, 'error al catch', 500)
        }
    }

    static async getAll(userId: string, name: RegExp | null, code: RegExp | null): Promise<ResponseType<ConciliationType>> {
        try {
            if (userId) {
                if (name && code) {
                    const conciliation = await Conciliation.find({ userId, name, code })
                    if (conciliation) {
                        return ResponseApi.success<ConciliationType>({ error: false, data: conciliation, message: "conciliaciones encontradas", status: 200 })
                    }
                    return ResponseApi.error(true, "error al buscar las conciliaciones", 400)
                }
                const conciliations = await Conciliation.find({ userId })
                if (conciliations) {
                    return ResponseApi.success<ConciliationType>({ error: false, data: conciliations, message: "conciliaciones encontradas", status: 200 })
                }
                return ResponseApi.error(true, 'error al buscar conciliaciones', 400)
            }
            return ResponseApi.error(true, 'no tiene userId', 400)
        } catch (error) {
            return ResponseApi.error(true, 'entro al catch', 500)
        }
    }

    static async getById(id: string, userId: string): Promise<ResponseType<ConciliationType>> {
        try {
            if (id && userId) {
                const conciliation = await Conciliation.findById(id)
                console.log(conciliation)
                if (conciliation) {
                    if (conciliation.userId.toString() === userId) {
                        return ResponseApi.success<ConciliationType>({ error: false, data: conciliation, message: "conciliacion encontrada", status: 200 })
                    }
                    return ResponseApi.error(true, 'el usuario no tiene permiso para ver otra conciliacion que no le pertenece', 404)
                }
                return ResponseApi.error(true, 'error al buscar conciliacion con ese id', 400)
            }
            return ResponseApi.error(true, 'id no existe', 400)
        } catch (error) {
            return ResponseApi.error(true, 'entro al catch', 500)
        }
    }
}