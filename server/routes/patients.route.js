import express from 'express'
import { signIn, signOut, signUp } from '../controllers/patients.controller.js';

const router = express.Router();
router.post('/sign-up',signUp);
router.post('/sign-in',signIn);
router.get('/sign-out',signOut);

export default router;