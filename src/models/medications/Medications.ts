import mongoose, { Schema } from "mongoose";
import { MedicationsType } from "../../types/medications/medications";

const MedicationsSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    code: {
        type: String,
        required: true,
        trim: true
    },
    aluminium_bad: {
        type: String,
        required: true,
        trim: true
    },
    aluminium_good: {
        type: String,
        required: true,
        trim: true
    },
    pvc_tablet: {
        type: String,
        required: true,
        trim: true
    },
    blister_bad: {
        type: String,
        required: true,
        trim: true
    },
    blister_good: {
        type: String,
        required: true,
        trim: true
    },
    qty_blister_per_box: {
        type: String,
        required: true,
        trim: true
    },
    qty_plegadizas: {
        type: String,
        required: true,
        trim: true
    },
    qty_label_used: {
        type: String,
        required: true,
        trim: true
    },
    qty_tablets_per_blister: {
        type: String,
        required: true,
        trim: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
        trim: true
    }

}, { timestamps: true })



const Medications = mongoose.model<MedicationsType>('Medications', MedicationsSchema)

export default Medications