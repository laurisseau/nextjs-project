import express from 'express';
//import { isAuth } from '../utils.js';
import {
  signup,
  decodeJwtToVerify,
  emailVerification,
  login,
  updateProfile,
  updatedEmailVerification,
  forgotPassword,
  resetPassword,
} from '../controller/user.mjs';

const userRouter = express.Router();

userRouter.post('/signup', signup);

userRouter.post('/login', login);

userRouter.get('/email/:id', decodeJwtToVerify);

userRouter.post('/emailVerification', emailVerification);

userRouter.post('/updateEmailVerification', updatedEmailVerification);

userRouter.post('/forgotPassword', forgotPassword);

userRouter.patch('/resetPassword/:token', resetPassword);

userRouter.put('/profile', updateProfile); //isAuth,

export default userRouter;
