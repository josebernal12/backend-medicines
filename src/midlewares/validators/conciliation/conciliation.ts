import { check } from 'express-validator'

import { Request, Response, NextFunction } from 'express'
import validateResult from '../validationResult';

export const checkValueConciliation = [
    check('mainTableData').exists().notEmpty().withMessage('main table data no puede ir vacio'),
    check('secondTableData').exists().notEmpty().withMessage('second table data no puede ir vacio'),
    check('fiveTableData').exists().notEmpty().withMessage('five table data no puede ir vacio'),
    check('tableMerma').exists().notEmpty().withMessage('tableMerma no puede ir vacio'),
    check('tableAcondicionado').exists().notEmpty().withMessage('tableAcondicionado'),
    check('hermes').exists().notEmpty().withMessage('hermes no puede ir vacio'),
    check('tableTeleCamara').exists().notEmpty().withMessage('tableTeleCamara no puede ir vacio'),
    check('tableFour').exists().notEmpty().withMessage('tableFour no puede ir vacio'),
    check('factor').exists().notEmpty().withMessage('factor no puede ir vacio'),
    check('lastTable').exists().notEmpty().withMessage('lastTable no puede ir vacio'),
    check('tableSumatoria').exists().notEmpty().withMessage('tableSumatoria no puede ir'),
    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next);
    },


]

