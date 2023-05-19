import express from 'express';
import qnaRouter from './qna.js'
import {isAuth} from '../../middleware/token.js'


const router = express.Router();

router.use('/qna',qnaRouter)

router.get('/',(req,res)=>{
    res.status(200).json({message:"로그인 페이지 이동"})
})

export default router