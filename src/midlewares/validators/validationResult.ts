import { validationResult, ValidationError } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

interface CustomValidationResult {
    throw(): void;
    array(): ValidationError[];
}

const isValidationErrorWithLocation = (error: ValidationError): error is ValidationError & { location: string } => {
    return 'location' in error;
};

const validateResult = (req: Request, res: Response, next: NextFunction) => {
    try {
        const result: CustomValidationResult = validationResult(req) as unknown as CustomValidationResult;
        result.throw();
        return next();
    } catch (error) {
        if (error && typeof error === 'object' && 'array' in error) {
            const validationErrors = (error as CustomValidationResult).array();

            // Procesar errores para obtener un mensaje de error combinado
            const messages = validationErrors.map(err => {
                if ('param' in err) {
                    return `${err.param}: ${err.msg}`;
                } else {
                    return err.msg;
                }
            });

            const message = messages.join(', ');
            
            res.status(403).send({ error: true, message, status: 403 });
        } else {
            res.status(500).send({ error: true, message: 'Unexpected error occurred', status: 500 });
        }
    }
};

export default validateResult;
