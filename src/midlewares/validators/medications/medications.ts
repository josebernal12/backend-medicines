import { check } from 'express-validator'

import { Request, Response, NextFunction } from 'express'
import validateResult from '../validationResult';

export const medicationsCreate = [
    check('name').exists().notEmpty().withMessage('el nombre no puede ir vacio'),
    check('code').exists().notEmpty().withMessage('el codigo no puede ir vacio'),
    check('aluminium_bad').exists().notEmpty().withMessage('el aluminio bad no puede ir vacio'),
    check('aluminium_good').exists().notEmpty().withMessage('el aluminio good'),
    check('pvc_tablet').exists().notEmpty().withMessage('el pvc tablet no puede ir vacio'),
    check('blister_bad').exists().notEmpty().withMessage('el blister bad no puede ir vacio'),
    check('blister_good').exists().notEmpty().withMessage('el blister good'),
    check('qty_blister_per_box').exists().notEmpty().withMessage('cantidad de blister tiene que venir'),
    check('qty_plegadizas').exists().notEmpty().withMessage('cantidad de plegadizas tiene que venir'),
    check('qty_label_used').exists().notEmpty().withMessage('cantidad de etiquetas usadas tiene que venir'),
    check('qty_tablets_per_blister').exists().notEmpty().withMessage('cantidad de tabletas por blister tiene que venir'),
    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next);
    },
]

export const medicationsUpdate = [
    check('name').exists().notEmpty().withMessage('el nombre no puede ir vacio'),
    check('code').exists().notEmpty().withMessage('el codigo no puede ir vacio'),
    check('aluminium_bad').exists().notEmpty().withMessage('el aluminio bad no puede ir vacio'),
    check('aluminium_good').exists().notEmpty().withMessage('el aluminio good'),
    check('pvc_tablet').exists().notEmpty().withMessage('el pvc tablet no puede ir vacio'),
    check('blister_bad').exists().notEmpty().withMessage('el blister bad no puede ir vacio'),
    check('blister_good').exists().notEmpty().withMessage('el blister good'),
    check('qty_blister_per_box').exists().notEmpty().withMessage('cantidad de blister tiene que venir'),
    check('qty_plegadizas').exists().notEmpty().withMessage('cantidad de plegadizas tiene que venir'),
    check('qty_label_used').exists().notEmpty().withMessage('cantidad de etiquetas usadas tiene que venir'),
    check('qty_tablets_per_blister').exists().notEmpty().withMessage('cantidad de tabletas por blister tiene que venir'),
    check('user_id').exists().notEmpty().withMessage('el usuario del id no puede ir vacio'),
    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next);
    },
]


