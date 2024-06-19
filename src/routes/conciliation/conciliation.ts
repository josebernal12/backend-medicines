import { Router } from 'express';
import { checkJwtToken } from '../../midlewares/jwt/checkJwt';
import { ConciliationController } from '../../controllers/conciliation/ConciliationController';
import { checkValueConciliation } from '../../midlewares/validators/conciliation/conciliation';

const router = Router();

router.route('/')
    .get(checkJwtToken, ConciliationController.getAll)
    .post(checkJwtToken, checkValueConciliation, ConciliationController.create);

router.route('/:id')
    .get(checkJwtToken, ConciliationController.getById)
    .put(checkJwtToken, checkValueConciliation, ConciliationController.update)
    .delete(checkJwtToken, ConciliationController.deleteById)
export default router;


