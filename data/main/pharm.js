import { Drugstore } from '../../db/main/pharm.js';
import {Op} from 'sequelize';

// 약국이름으로 찾기 출력
export async function getDrugName(P_NAME, page){
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