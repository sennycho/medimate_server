import * as dataRepository from '../../data/admin/drugstore.js';


// 생성
export async function createDrugstore(req, res, next){
    // body에 존재하는 id, name, ph, email, address를 선언
    const {P_NUM,P_NAME,P_ADDRESS,P_PHONE,P_MON_S,P_MON_C,P_TUE_S,P_TUE_C,P_WED_S,P_WED_C,P_THU_S,P_THU_C,P_FRI_S,P_FRI_C,P_SAT_S,P_SAT_C,P_SUN_S,P_SUN_C,P_HOLI_S,P_HOLI_C,P_LATI,P_LONGI} = req.body;
    const found = await dataRepository.getByDrugNum(P_NUM)
    if(found){
        res.status(401).json({message: `이미 존재하는 약국임.`});
    }else{
    // 성공시에 201페이지를 출력
    const result = await dataRepository.insert({
        P_NUM,P_NAME,P_ADDRESS,P_PHONE,P_MON_S,P_MON_C,P_TUE_S,P_TUE_C,P_WED_S,P_WED_C,P_THU_S,P_THU_C,P_FRI_S,P_FRI_C,P_SAT_S,P_SAT_C,P_SUN_S,P_SUN_C,P_HOLI_S,P_HOLI_C,P_LATI,P_LONGI
    })
    if (!result) {
        res.status(402).json(result)
    } else {
        res.status(200).json(result)
}}};

//  약국이름으로 찾기
export async function searchDrugName(req,res,next){
    const {P_NAME} = req.body;
    const data = await (P_NUM
        ? dataRepository.getByDrugName(P_NAME, page)
        : dataRepository.getAll(page));
    res.status(200).json(data);
    if (!data) {
        restart.status(401).json(`message:이미 존재하는 약국임`)
    }
};

// 약국번호로 찾기
export async function searchDrugNum(req, res, next) {
    const P_NUM = req.params.id
    const result = await dataRepository.getByDrugNum(P_NUM)
    if (!result) {
        res.status(400).json(result)
    } else {
        res.status(200).json(result)
    }
};


// 전체 출력 (페이지네이션 추가)
export async function getAllDrugstore(req,res){
    const page  = req.query.page || 1
    const { P_NAME } = req.body
    const result = await (P_NAME 
        ? dataRepository.getByDrugName(P_NAME,page)
        : dataRepository.getAll(page))
    if (!result) {
        res.status(400).json(result)
    } else {
        res.status(200).json(result)
    }
};

// 수정
export async function updateDrugstore(req, res){
    const id = req.params.id;
    const {P_NUM,P_NAME,P_ADDRESS,P_PHONE,P_MON_S,P_MON_C,P_TUE_S,P_TUE_C,P_WED_S,P_WED_C,P_THU_S,P_THU_C,P_FRI_S,P_FRI_C,P_SAT_S,P_SAT_C,P_SUN_S,P_SUN_C,P_HOLI_S,P_HOLI_C,P_LATI,P_LONGI} = req.body;
    const result = await dataRepository.update(id,{P_NUM,P_NAME,P_ADDRESS,P_PHONE,P_MON_S,P_MON_C,P_TUE_S,P_TUE_C,P_WED_S,P_WED_C,P_THU_S,P_THU_C,P_FRI_S,P_FRI_C,P_SAT_S,P_SAT_C,P_SUN_S,P_SUN_C,P_HOLI_S,P_HOLI_C,P_LATI,P_LONGI});
    if (!result) {
        res.status(402).json(result)
    } else {
        res.status(200).json(result)
    }
};


// 삭제
export async function deleteDrugstore(req,res){
    const num = req.params.id;
    const result = await dataRepository.remove(num)
        res.status(200).json(result)
};