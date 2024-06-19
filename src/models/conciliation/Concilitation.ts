import mongoose, { Schema } from "mongoose";
import { ConciliationType } from "../../types/conciliation/conciliation";

const ConciliationSchema: Schema = new Schema({
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
    mainTableData: [
        [{
            type: Number,
            required: true,
            trim: true
        }]
    ],
    secondTableData: [
        [{
            type: Number,
            required: true,
            trim: true
        }]
    ],
    fiveTableData: [
        [{
            type: Number,
            required: true,
            trim: true
        }]
    ],
    tableMerma: [
        [{
            type: Number,
            required: true,
            trim: true
        }]
    ],
    tableAcondicionado: {
        type: Number,
        required: true,
        trim: true
    },
    hermes: {
        type: Number,
        required: true,
        trim: true
    },
    tableTeleCamara: {
        type: Number,
        required: true,
        trim: true
    },
    tableFour: [
        [{
            type: Number,
            required: true,
            trim: true
        }]
    ],
    factor: [
        [{
            type: Number,
            required: true,
            trim: true
        }]
    ],
    lastTable: [
        [{
            type: Number,
            required: true,
            trim: true
        }]
    ],
    tableSumatoria: [
        [{
            type: Number,
            required: true,
            trim: true
        }]
    ],
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
        trim: true
    }

}, { timestamps: true })

const Conciliation = mongoose.model<ConciliationType>('Conciliation', ConciliationSchema)

export default Conciliation