import express from 'express';
import { signin, signout, signup } from '../controllers/doctors.controller.js';

const router = express.Router();

router.post('/sign-up',signup);
router.post('/sign-in',signin);
router.get('/sign-out',signout);




export default router;
