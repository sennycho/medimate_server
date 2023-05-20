import express from 'express';
import { body } from 'express-validator';
import loginRepository from './login.js'
import joinRepository from './join.js'
import medicineRepository from './medicine.js'
import mypageRepository from './mypage.js'

const router = express.Router();

router.use('/login', loginRepository);
router.use('/join', joinRepository);
router.use('/medicine',medicineRepository)
router.use('/mypage',mypageRepository)

export default router;