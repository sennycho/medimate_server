import express from 'express';
import { body } from 'express-validator';
import loginRouter from './login.js'
import joinRouter from './join.js'

const router = express.Router();

router.use('/login', loginRouter);
router.use('/join', joinRouter);


export default router;