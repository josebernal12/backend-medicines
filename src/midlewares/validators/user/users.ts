import { check } from 'express-validator'
import { Request, Response, NextFunction } from 'express'
import validateResult from '../validationResult';

export const userCreated = [
    check('name').exists().notEmpty().withMessage('el nombre no puede ir vacio'),
    check('email').exists().isEmail().notEmpty().withMessage('el email no puede ir vacio'),
    check('password').exists().notEmpty().withMessage('el password no puede ir vacio'),
    // check('password_confirmation').exists().notEmpty().withMessage('el confirmar password no puede ir vacio'),
    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next);
    },
]

export const userLogin = [
    check('email').exists().isEmail().notEmpty().withMessage('el email no puede ir vacio'),
    check('password').exists().notEmpty().withMessage('el password no puede ir vacio'),
    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next);
    },
]
export const userRecoverPassword = [
    check('email').exists().isEmail().notEmpty().withMessage('el email no puede ir vacio'),
    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next);
    },
]

export const userChangePassword = [
    check('password').exists().notEmpty().withMessage('el password no puede ir vacio'),
    check('password_confirmation').exists().notEmpty().withMessage('el confirmar password no puede ir vacio'),
    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next);
    },
]



