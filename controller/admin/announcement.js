import * as dataRepository from '../../data/admin/announcement.js';
// merge test

// 생성 (어디가 문제?)
export async function createAnnounce(req, res, next){
    // body에 존재하는 id, name, ph, email, address를 선언
    const U_NUM = req.U_NUM;
    const {A_TITLE,A_DATE,A_CONTENT} = req.body;
    const result = await dataRepository.insert({
        U_NUM,
        A_TITLE,
        A_DATE,
        A_CONTENT
    })
    if (result) {
    // 성공시에 201페이지를 출력
    res.status(201).json(result);
    } else {
    res.status(404).json({ message: `공지사항 등록 오류` });
    }
}


// 공지사항번호로 찾기
export async function searchAnnounceNum(req, res, next) {
    const P_NUM = req.params.id
    const result = await dataRepository.getByAnnounceNum(P_NUM)
    if (result) {
        res.status(200).json(result)
    } else {
        res.status(400).json({message: `공지사항 번호로 찾기 오류`})
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
    const U_NUM = req.U_NUM;
    const page  = req.query.page || 1
    const { A_TITLE } = req.body
    const datas = await (A_TITLE 
        ? dataRepository.getByUNum(U_NUM)
        : dataRepository.getAll(page))
    if (!datas) {
        res.status(400).json({message: `공지사항 전체출력오류`})
    } else {
        res.status(200).json(datas)
    }
};

// 수정
export async function updateAnnounce(req, res){
    const A_NUM = req.params.id;
    const {A_TITLE,A_CONTENT} = req.body;
    const found = await dataRepository.getByAnnounceNum(A_NUM);
    
    if (found) {
        const result = await dataRepository.update({A_TITLE, A_CONTENT});
        res.status(200).json(result)
    } else {
        res.status(402).json({message: `공지사항 수정오류`})
    }
}


// 삭제
export async function deleteAnnounce(req,res){
    const A_NUM = req.params.id;
    const found = await dataRepository.getByAnnounceNum(A_NUM);

    if(found){
        await calendarRepository.remove(A_NUM);
        res.sendStatus(204);
    }else{
        res.status(404).json({ message: `공지사항 삭제오류`});
    }
}