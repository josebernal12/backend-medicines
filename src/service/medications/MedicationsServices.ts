import { ResponseApi } from "../../helpers/response/response";
import Medications from "../../models/medications/Medications";
import { MedicationsEndpoint, MedicationsType } from "../../types/medications/medications";
import { ResponseType } from "../../types/response/response.types";

export class MedicationsServices {

    static async create(id: string, {
        name,
        code,
        aluminium_bad,
        aluminium_good,
        pvc_tablet,
        blister_bad,
        blister_good,
        qty_blister_per_box,
        qty_plegadizas,
        qty_label_used,
        qty_tablets_per_blister
    }: MedicationsEndpoint): Promise<ResponseType<MedicationsType>> {
        try {
            const medications = await Medications.create({
                name,
                code,
                aluminium_bad,
                aluminium_good,
                pvc_tablet,
                blister_bad,
                blister_good,
                qty_blister_per_box,
                qty_plegadizas,
                qty_label_used,
                qty_tablets_per_blister,
                userId: id
            });
            if (medications) {
                return ResponseApi.success<MedicationsType>({ error: false, data: medications, message: "medicamento creado", status: 200 })
            }
            return ResponseApi.error(true, 'error al crear medicamento', 404)
        } catch (error) {
            return ResponseApi.error(true, "entro al catch", 500)
        }
    }
    static async update(id: string, userId: string, {
        name,
        code,
        aluminium_bad,
        aluminium_good,
        pvc_tablet,
        blister_bad,
        blister_good,
        qty_blister_per_box,
        qty_plegadizas,
        qty_label_used,
        qty_tablets_per_blister,
    }
        : MedicationsEndpoint
    ): Promise<ResponseType<MedicationsType>> {

        try {
            if (id && userId) {
                const medications = await Medications.findById(id);
                if (medications) {
                    if (medications.userId.toString() === userId) {
                        const update = await Medications.findByIdAndUpdate(id, {
                            name,
                            code,
                            aluminium_bad,
                            aluminium_good,
                            pvc_tablet,
                            blister_bad,
                            blister_good,
                            qty_blister_per_box,
                            qty_plegadizas,
                            qty_label_used,
                            qty_tablets_per_blister,
                            userId
                        }, { new: true });
                        if (update) {
                            return ResponseApi.success<MedicationsType>({ error: false, data: medications, message: "medicamento actualizado", status: 200 })
                        }
                        return ResponseApi.error(true, 'usuario no puede actualizar un medicamento de otro usuario', 404)
                    }
                }
                return ResponseApi.error(true, 'error al actualizar medicamento', 404)
            }
            return ResponseApi.error(true, 'id no existe', 400)
        } catch (error) {
            return ResponseApi.error(true, "entro al catch", 500)
        }
    }
    static async deleteById(id: string, userId: string): Promise<ResponseType<MedicationsType>> {
        try {
            if (id && userId) {
                const medication = await Medications.findById(id)
                if (medication) {
                    if (medication.userId.toString() === userId) {
                        const deleted = await Medications.findById(id, { new: true })
                        if (deleted) {
                            return ResponseApi.success<MedicationsType>({ error: false, data: medication, message: "Medicamento eliminado", status: 200 });
                        }
                        return ResponseApi.error(true, "error al eliminar el usuario", 400)
                    }
                    return ResponseApi.error(true, "el medicamento no pertenece al usuario", 400)
                }
                return ResponseApi.error(true, 'no existe medicamentos con ese id', 404)
            }
            return ResponseApi.error(true, "no existe id", 404);
        } catch (error) {
            return ResponseApi.error(true, "entro al catch", 500)
        }
    }

    static async getAll(userId: string, name: RegExp | null, code: RegExp | null): Promise<ResponseType<MedicationsType>> {
        try {
            if (userId) {
                if (name && code) {
                    const medications = await Medications.find({ userId, name, code })
                    if (medications) {
                        return ResponseApi.success<MedicationsType>({ error: false, data: medications, message: "medicamentos obtenidos", status: 200 })
                    }
                    return ResponseApi.error(true, "error al buscar medicamentos", 400)
                }
                const medications = await Medications.find({ userId })
                if (medications) {
                    return ResponseApi.success<MedicationsType>({ error: false, data: medications, message: "medicamentos obtenidos", status: 200 })
                }
                return ResponseApi.error(true, "error al buscar medicamentos", 400)
            }
            return ResponseApi.error(true, "no tiene userId", 400)
        } catch (error) {
            return ResponseApi.error(true, "entro al catch", 500)
        }
    }

    static async getById(id: string, userId: string): Promise<ResponseType<MedicationsType>> {
        try {
            if (id) {
                const medication = await Medications.findById(id)
                if (medication) {
                    if (medication.userId.toString() === userId) {
                        return ResponseApi.success<MedicationsType>({ error: false, data: medication, message: "medicamento obtenido", status: 200 })
                    }
                    return ResponseApi.error(true, "el medicamento no pertenece al usuario", 400)
                }
                return ResponseApi.error(true, "error al buscar medicamento", 400)
            }
            return ResponseApi.error(true, "no existe id", 400)
        } catch (error) {
            return ResponseApi.error(true, "entro al catch", 500)
        }
    }

    static async searchMedicationExactly(name: RegExp | null, code: RegExp | null, userId: string): Promise<ResponseType<MedicationsType>> {
        try {
            if (name && code && userId) {
                const medication = await Medications.findOne({ name, code, userId })
                if (medication) {
                    return ResponseApi.success<MedicationsType>({ error: false, data: medication, message: "medicamento encontrado", status: 200 })
                }
                return ResponseApi.error(true, "error al buscar el medicamento", 400)
            }
            return ResponseApi.error(true, "todos los datos en la query son necesarios", 400)

        } catch (error) {
            return ResponseApi.error(true, "error al catch", 500)
        }
    }
}