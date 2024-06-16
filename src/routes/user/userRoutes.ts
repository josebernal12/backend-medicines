import { Router } from 'express'
import { UserController } from '../../controllers/user/UserController'


const router = Router()

router.get('/', UserController.getAll)
router.get('/:id', UserController.getById)
router.route('/:id')
    .put(UserController.update)
    .delete(UserController.deleteById)

export default router