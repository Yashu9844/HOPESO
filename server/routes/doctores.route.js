import express from 'express';
import { forgotPassword, resetPassword, signin, signout, signup } from '../controllers/doctors.controller.js';

const router = express.Router();

router.post('/sign-up',signup);
router.post('/sign-in',signin);
router.get('/sign-out',signout);
router.post('/forgot-password',forgotPassword);
router.post('/reset-password/:token',resetPassword);




export default router;
