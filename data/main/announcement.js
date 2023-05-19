import { Announcement } from '../../db/main/announcement.js';
import { User } from '../../db/main/user.js';
import {Op} from 'sequelize';

// 부분 출력
export async function getByNum(A_NUM){
    return Announcement.findOne( {where: { A_NUM }});
}

// 제목으로 찾기 출력
export async function getByTitle({A_TITLE}, page){
    let limit = 10;
    let offset = (page - 1) * limit;
    return Announcement.findAndCountAll({
        limit,
        offset,
        order: [
            ['U_NUM', 'DESC']
        ],
        where: { A_TITLE: { [Op.like]: `%${A_TITLE}%` } }
    });
}

// 전체 출력 (페이지네이션 기능 추가)
export async function getAll(page){
    let limit = 10;
    let offset = (page - 1) * limit;
    return User.findAndCountAll({
        limit,
        offset,
        order: [
            ['U_NUM', 'DESC']
        ]
    });
}