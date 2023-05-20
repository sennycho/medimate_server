import { Calendar } from "../../db/calendar.js";

export async function getByUNum(U_NUM){
    return Calendar.findAll( { where: { U_NUM }});
}

export async function getByCNum(C_NUM){
    return Calendar.findByPk(C_NUM);
}

export async function insert(calendar){
    return Calendar.create(calendar).then((data) => data.dataValues.C_NUM);
}

export async function update(calendar){
    return Calendar.findByPk(calendar.C_NUM).then((temp_calendar) => {
        temp_calendar.C_TITLE = calendar.C_TITLE;
        temp_calendar.C_START = calendar.C_START;
        temp_calendar.C_END = calendar.C_END;
        temp_calendar.C_CONTENT = calendar.C_CONTENT;
        temp_calendar.C_ALARM = calendar.C_ALARM;
        return temp_calendar.save();
    });
}

export async function remove(C_NUM){
    return Calendar.findByPk(C_NUM).then((calendar) => {
        calendar.destroy();
    });
}