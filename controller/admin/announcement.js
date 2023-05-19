import * as dataRepository from '../../data/admin/announcement.js';
// merge test

// 생성
export async function createAnnounce(req, res, next){
    // body에 존재하는 id, name, ph, email, address를 선언
    const {A_TITLE,A_DATE,A_CONTENT,U_NUM} = req.body;
    await dataRepository.insert({
        A_TITLE,
        A_DATE,
        A_CONTENT,
        U_NUM
    });
    // 성공시에 201페이지를 출력
    res.status(201).json({ message: `공지사항이 새로 등록됨.` });
}

// 이름으로 찾기 출력
export async function getAnnounceByTitle(req,res){
    const {A_TITLE} = req.body;
    const page = req.params.id;
    const data = await dataRepository.getByTitle({A_TITLE}, page);
    res.status(200).json(data);
}

// 전체 출력 (페이지네이션 기능 추가)
export async function getAllAnnounce(req,res){
    const page = req.query.page || 1;
    const data = await dataRepository.getAll(page);
    res.status(200).json(data);
}

// 수정
export async function updateAnnounce(req, res){
    const num = req.params.id;
    const {A_TITLE,A_CONTENT} = req.body;
    const data = await dataRepository.update({A_TITLE,A_CONTENT});
    res.status(200).json(data);
}


// 삭제
export async function deleteAnnounce(req,res){
    const num = req.params.id;
    await dataRepository.remove(num);
    res.sendStatus(204);
}