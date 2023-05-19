import * as qnaRepository from '../../data/admin/qna.js'

export async function SearchQnaAll(req, res, next) {
    const page  = req.query.page || 1
    const { Q_TITLE } = req.body

    const datas = await (Q_TITLE
        ? qnaRepository.getByUName(Q_TITLE,page)
        : qnaRepository.getAll(page))

    if (!datas) {
        res.status(400).json(datas)
    } else {
        res.status(200).json(datas)
    }
};

export async function SearchQnaOne(req, res, next) {
    const pNum = req.params.id
    const result = await qnaRepository.findByNum(pNum)
    if (!result) {
        res.status(400).json(result)
    } else {
        res.status(200).json(result)
    }
};

export async function MakeQna(req, res, next) {
    const uNum = req.params.id
    const { Q_TITLE } = req.body

    const result = await qnaRepository.create({
        Q_TITLE,
        U_NUM:uNum
    })
    if (!result) {
        res.status(402).json(result)
    } else {
        res.status(200).json(result)
    }
}

export async function ChangeQna(req, res, next) {
    const a = req.params.id
    const { Q_CONTENT } = req.body

    const result = await qnaRepository.update(a,Q_CONTENT)
    
    if (!result) {
        res.status(402).json(result)
    } else {
        res.status(200).json(result)
    }
}

export async function DeleteQna(req,res,next){
    const qNum = req.params.id
    const result = await qnaRepository.remove(qNum)

    if (!result) {
        res.status(402).json(result)
    } else {
        res.status(200).json(result)
    }
}