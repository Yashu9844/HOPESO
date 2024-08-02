import express from 'express';
import { signin, signup } from '../controllers/doctors.controller.js';

const router = express.Router();

router.get('/sign-in',signin);
router.post('sign-up',signup);


export default router;
