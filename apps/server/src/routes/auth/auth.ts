import express from 'express';
const router = express();
import { body } from 'express-validator';
import { loginUserWithEmail, registerUserWithEmail } from '@controllers/auth-controllers/emailAuthController';

const MIN_PASSWORD_LENGTH = 6;

// register user
// post request
// /api/auth/register
router.post(
  '/register',
  body('email').isEmail(),
  body('password').isLength({ min: MIN_PASSWORD_LENGTH }),
  registerUserWithEmail
);

// login user
// post request
// /api/auth/login
router.post('/login', loginUserWithEmail);

export default router;
