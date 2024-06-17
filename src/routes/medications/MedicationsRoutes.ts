import { Router } from "express"
import { checkJwtToken } from "../../midlewares/jwt/checkJwt"
import { MedicationsController } from "../../controllers/medications/MedicationsController"
import { medicationsCreate, medicationsUpdate } from "../../midlewares/validators/medications/medications";

const router = Router()

router.route('/')
    .get(checkJwtToken, MedicationsController.getAll)
    .post(checkJwtToken, medicationsCreate, MedicationsController.create);

router.route('/:id')
    .get(checkJwtToken, MedicationsController.getById)
    .put(checkJwtToken, medicationsUpdate, MedicationsController.update)
    .delete(checkJwtToken, MedicationsController.deleteById)



export default router