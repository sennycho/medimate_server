import { Drugstore } from '../../db/drugstore.js';
import {Op} from 'sequelize';

// 생성
export async function insert(info){
    return Drugstore.create(info)
    .then((data) => data.dataValues.P_NUM);
}


// 약국이름으로 찾기
export async function getByDrugName(P_NAME, page){
    let limit = 10;
    let offset = (page - 1) * limit;
    return Drugstore.findAndCountAll({
        limit,
        offset,
        order: [
            ['P_NUM', 'DESC']
        ],
        where: { P_NAME: { [Op.like]: `%${P_NAME}%` } }
    });
}

// 약국번호로 찾기
export async function getByDrugNum(P_NUM){
    return Drugstore.findByPk(P_NUM)
}

// 전체 출력 (페이지네이션 기능 추가)
export async function getAll(page){
    let limit = 10;
    let offset = (page - 1) * limit;
    return Drugstore.findAndCountAll({
        limit,
        offset,
        order: [
            ['P_NUM', 'DESC']
        ]
    });
}


// 수정
export async function update(id, td_pharm){
    return Drugstore.findByPk(id)
    .then((oldDrug) => {
        oldDrug.P_NUM = td_pharm.P_NUM;
        oldDrug.P_NAME = td_pharm.P_NAME;
        oldDrug.P_ADDRESS = td_pharm.P_ADDRESS;
        oldDrug.P_PHONE = td_pharm.P_PHONE;
        oldDrug.P_MON_S = td_pharm.P_MON_S;
        oldDrug.P_MON_C = td_pharm.P_MON_C;
        oldDrug.P_TUE_S = td_pharm.P_TUE_S;
        oldDrug.P_TUE_C = td_pharm.P_TUE_C;
        oldDrug.P_WED_S = td_pharm.P_WED_S;
        oldDrug.P_WED_C = td_pharm.P_WED_C;
        oldDrug.P_THU_S = td_pharm.P_THU_S;
        oldDrug.P_THU_C = td_pharm.P_THU_C;
        oldDrug.P_FRI_S = td_pharm.P_FRI_S;
        oldDrug.P_FRI_C = td_pharm.P_FRI_C;
        oldDrug.P_SAT_S = td_pharm.P_SAT_S;
        oldDrug.P_SAT_C = td_pharm.P_SAT_C;
        oldDrug.P_SUN_S = td_pharm.P_SUN_S;
        oldDrug.P_SUN_C = td_pharm.P_SUN_C;
        oldDrug.P_HOLI_S = td_pharm.P_HOLI_S;
        oldDrug.P_HOLI_C = td_pharm.P_HOLI_C;
        oldDrug.P_LATI = td_pharm.P_LATI;
        oldDrug.P_LONGI = td_pharm.P_LONGI;
        return oldDrug.save();
    });
}


// 삭제
export async function remove(P_NUM){
    return Drugstore.findByPk(P_NUM)
    .then((Drugstore) => {
        Drugstore.destroy();
    });
}