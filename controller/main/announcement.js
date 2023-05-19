import * as dataRepository from '../../data/main/announcement.js';

// 이름으로 찾기 출력
export async function getAnnounceByTitle(req,res){
    const {A_TITLE} = req.body;
    const page = req.params.id;
    if (data) { await dataRepository.getByTitle({A_TITLE}, page);
    res.status(200).json(data);
} else {
    res.status(404).json(data)
}};

// 전체 출력 (페이지네이션 기능 추가)
export async function getAllAnnounce(req,res){
    const page = req.query.page || 1;
    const data = await dataRepository.getAll(page);
    res.status(200).json(data);
}
