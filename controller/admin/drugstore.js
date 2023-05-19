import * as dataRepository from '../../data/admin/drugstore.js';


// 생성
export async function createDrugstore(req, res, next){
    // body에 존재하는 id, name, ph, email, address를 선언
    const {P_NUM,P_NAME,P_ADDRESS,P_PHONE,P_MON_S,P_MON_C,P_TUE_S,P_TUE_C,P_WED_S,P_WED_C,P_THU_S,P_THU_C,P_FRI_S,P_FRI_C,P_SAT_S,P_SAT_C,P_SUN_S,P_SUN_C,P_HOLI_S,P_HOLI_C,P_LATI,P_LONGI} = req.body;
    await dataRepository.insert({
        P_NUM,P_NAME,P_ADDRESS,P_PHONE,P_MON_S,P_MON_C,P_TUE_S,P_TUE_C,P_WED_S,P_WED_C,P_THU_S,P_THU_C,P_FRI_S,P_FRI_C,P_SAT_S,P_SAT_C,P_SUN_S,P_SUN_C,P_HOLI_S,P_HOLI_C,P_LATI,P_LONGI
    });
    // 성공시에 201페이지를 출력
    res.status(201).json({ message: `약국정보가 새로 등록됨.` });
}

// 부분 출력
export async function getByDrugName(req,res){
    const {P_NAME} = req.body;
    const page = req.params.id;
    const data = await (P_NAME
        ? dataRepository.getDrugName(P_NAME, page)
        : dataRepository.getAll(page));
    res.status(200).json(data);
}

// 전체 출력 (페이지네이션 추가)
export async function getAllDrugstore(req,res){
    const page = req.query.page || 1;
    const data = await dataRepository.getAll(page);
    res.status(200).json(data);
}

// 수정
export async function updateDrugstore(req, res){
    const {P_NUM,P_NAME,P_ADDRESS,P_PHONE,P_MON_S,P_MON_C,P_TUE_S,P_TUE_C,P_WED_S,P_WED_C,P_THU_S,P_THU_C,P_FRI_S,P_FRI_C,P_SAT_S,P_SAT_C,P_SUN_S,P_SUN_C,P_HOLI_S,P_HOLI_C,P_LATI,P_LONGI} = req.body;
    const data = await dataRepository.update({P_NUM,P_NAME,P_ADDRESS,P_PHONE,P_MON_S,P_MON_C,P_TUE_S,P_TUE_C,P_WED_S,P_WED_C,P_THU_S,P_THU_C,P_FRI_S,P_FRI_C,P_SAT_S,P_SAT_C,P_SUN_S,P_SUN_C,P_HOLI_S,P_HOLI_C,P_LATI,P_LONGI});
    res.status(200).json(data);
}


// 삭제
export async function deleteDrugstore(req,res){
    const num = req.params.id;
    await dataRepository.remove(num);
    res.sendStatus(204);
}