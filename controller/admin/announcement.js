import * as dataRepository from '../../data/admin/announcement.js';

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


// 공지사항번호로 찾기
export async function searchAnnounceNum(req, res, next) {
    const P_NUM = req.params.id
    const result = await dataRepository.getByAnnounceNum(P_NUM)
    if (!result) {
        res.status(400).json(result)
    } else {
        res.status(200).json(result)
    }
};



// 공지사항 제목으로 찾기
export async function searchAnnounceByTitle(req,res){
    const {A_TITLE} = req.body;
    const data = await (A_NUM
        ? dataRepository.getByTitle(A_TITLE, page)
        : dataRepository.getAll(page));
    res.status(200).json(data);
    if (!data) {
        restart.status(401).json(data)
    }
};

// 전체 출력 (페이지네이션 기능 추가)
export async function getAllAnnounce(req,res){
    const page  = req.query.page || 1
    const { A_TITLE } = req.body
    const datas = await (A_TITLE 
        ? dataRepository.getByTitle(A_TITLE,page)
        : dataRepository.getAll(page))

    if (!datas) {
        res.status(400).json(datas)
    } else {
        res.status(200).json(datas)
    }
};

// 수정
export async function updateAnnounce(req, res){
    const id = req.params.id;
    const {A_TITLE,A_CONTENT} = req.body;
    const result = await dataRepository.update(id,{A_TITLE,A_CONTENT});
    if (!result) {
        res.status(402).json(result)
    } else {
        res.status(200).json(result)
    }
}


// 삭제
export async function deleteAnnounce(req,res){
    const num = req.params.id;
    const result = await dataRepository.remove(num)
        res.status(200).json(result)
    }