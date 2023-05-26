import * as findRepository from '../../data/main/find.js';
import { config } from '../../config.js';
import bcrypt from 'bcrypt';

export async function findId(req, res){
    const { U_NAME, U_EMAIL } = req.body;
    console.log(U_NAME);

    const data = await findRepository.getId(U_NAME, U_EMAIL);

    res.status(200).json(data);
}

export async function findPw(req, res){
    const { U_ID, U_NAME, U_EMAIL, U_PW } = req.body;
    const user = await findRepository.getUser(U_ID, U_NAME, U_EMAIL);

    if(user){
        const hashed = await bcrypt.hash(U_PW, config.bcrypt.saltRounds);
        const updated = await findRepository.getPw(U_ID, hashed);
        res.status(200).json(updated);
    }else{
        res.status(404).json({ message: `${U_NUM}번호 회원은 없습니다`});
    }
}
