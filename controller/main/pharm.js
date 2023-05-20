import * as dataRepository from '../../data/main/pharm.js';


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