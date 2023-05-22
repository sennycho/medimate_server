import * as dataRepository from '../../data/main/announcement.js';

// 번호로 찾기 출력 (상세번호)
export async function getAnnounceOne(req,res){
    const page = req.params.id;
    const result = await dataRepository.getByNum(A_NUM)
    if (!result) {
        res.status(400).json(result)
    } else {
        res.status(200).json(result)
    }
};


// 전체 출력
export async function getAllAnnounce(req,res){
    const page  = req.query.page || 1
    const {A_TITLE} = req.body;
    const result = await (A_NUM
        ? dataRepository.getByTitle(A_TITLE, page)
        : dataRepository.getAll(page));
    if (!result) {
        res.status(400).json({message: `공지사항 전체출력오류`})
    } else {
        res.status(200).json(result)
    }
};