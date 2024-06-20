import { Router } from 'express';
import { checkJwtToken } from '../../midlewares/jwt/checkJwt';
import { ConciliationController } from '../../controllers/conciliation/ConciliationController';

const router = Router();

router.route('/')
    .get(checkJwtToken, ConciliationController.getAll)
    .post(checkJwtToken, ConciliationController.create);

router.route('/:id')
    .get(checkJwtToken, ConciliationController.getById)
    .put(checkJwtToken, ConciliationController.update)
    .delete(checkJwtToken, ConciliationController.deleteById)
export default router;


