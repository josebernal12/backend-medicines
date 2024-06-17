import { Document } from "mongoose";

export type MedicationsType = Document & {
    _id: string;
    name: string;
    code: string;
    aluminium_bad: string;
    aluminium_good: string;
    pvc_tablet: string;
    blister_bad: string;
    blister_good: string;
    qty_blister_per_box: string;
    qty_plegadizas: string;
    qty_label_used: string;
    qty_tablets_per_blister: string
    userId: string;
}

export type MedicationsEndpoint = Omit<MedicationsType, "_id"> 