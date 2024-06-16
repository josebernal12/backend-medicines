import { Router } from 'express'
import { AuthController } from '../../controllers/auth/AuthController'
import { userChangePassword, userCreated, userLogin, userRecoverPassword } from '../../midlewares/validators/user/users'
const router = Router()
router.post('/create-account',
  userCreated,
  AuthController.createAccount
)
router.post('/login',
  userLogin,
  AuthController.login
)
router.post('/recover-password',
  userRecoverPassword,
  AuthController.recoverPassword
)
router.get('/check-token/:token', AuthController.checkTokenEmail)
router.post('change-password/:token',
  userChangePassword,
  AuthController.changePassword
)

export default router