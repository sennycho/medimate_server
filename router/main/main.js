import express from 'express';
import { body } from 'express-validator';
import loginRouter from './login.js'
import joinRouter from './join.js'
import medicineRouter from './medicine.js'
import mypageRouter from './mypage.js'
import calendarRouter from './calendar.js'

const router = express.Router();

router.use('/login', loginRouter);
router.use('/join', joinRouter);
router.use('/medicine',medicineRouter);
router.use('/mypage',mypageRouter);
router.use('/calendar',calendarRouter)

export default router;