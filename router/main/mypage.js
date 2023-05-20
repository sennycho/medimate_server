import express from 'express';
import qnaRouter from './qna.js'
import withdrawalRouter from './withdrawal.js'
import pwRouter from './pw.js'
import infoRouter from './info.js'


const router = express.Router();

router.use('/qna',qnaRouter)
router.use('/withdrawal',withdrawalRouter)
router.use('/pw',pwRouter)
router.use('/info',infoRouter)


router.get('/',(req,res)=>{
    res.status(200).json({message:"로그인 페이지 이동"})
})

export default router