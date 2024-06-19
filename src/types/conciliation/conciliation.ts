import { Document } from "mongoose"

export type ConciliationType = Document & {
    mainTableData: number[],
    secondTableData: number[],
    fiveTableData: number[],
    tableMerma: number[],
    tableAcondicionado: number,
    hermes: number,
    tableTeleCamara: number,
    tableFour: number[],
    factor: number[],
    lastTable: number[],
    tableSumatoria: number[],
    userId: string
}

export type ConciliationEndpoint = Omit<ConciliationType, '_id'>