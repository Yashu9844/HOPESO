import express from 'express';
import { signin, signup } from '../controllers/doctors.controller.js';

const router = express.Router();

router.post('/sign-up',signup);
router.post('/sign-in',signin);



export default router;
