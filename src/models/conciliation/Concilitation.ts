import mongoose, { Schema } from "mongoose";
import { ConciliationType } from "../../types/conciliation/conciliation";

const ConciliationSchema: Schema = new Schema({
    name: {
        type: String,
        trim: true
    },
    code: {
        type: String,
        trim: true
    },
    mainTableData: [
        [{
            type: Number,
            trim: true
        }]
    ],
    secondTableData: [
        [{
            type: Number,
            trim: true
        }]
    ],
    fiveTableData: [
        [{
            type: Number,
            trim: true
        }]
    ],
    tableMerma: [
        [{
            type: Number,
            trim: true
        }]
    ],
    tableAcondicionado: {
        type: Number,
        trim: true
    },
    hermes: {
        type: Number,
        trim: true
    },
    tableTeleCamara: {
        type: Number,
        trim: true
    },
    tableTeleCamara0: {
        type: Number,
        trim: true
    },
    tableFour: [
        [{
            type: Number,
            trim: true
        }]
    ],
    factor: [
        [{
            type: Number,
            trim: true
        }]
    ],
    lastTable: [
        [{
            type: Number,
            trim: true
        }]
    ],
    tableSumatoria: [
        [{
            type: Number,
            trim: true
        }]
    ],
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        trim: true
    }

}, { timestamps: true })

const Conciliation = mongoose.model<ConciliationType>('Conciliation', ConciliationSchema)

export default Conciliation