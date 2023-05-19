import * as medicineRepository from '../../data/admin/medicine.js'

export async function SearchMedicineAll(req, res, next) {
    const page  = req.query.page || 1
    const { M_NAME } = req.body

    const datas = await (M_NAME 
        ? medicineRepository.getByUName(M_NAME,page)
        : medicineRepository.getAll(page))

    if (!datas) {
        res.status(400).json(datas)
    } else {
        res.status(200).json(datas)
    }
};

export async function SearchMedicineOne(req, res, next) {
    const pNum = req.params.id
    const result = await medicineRepository.findByNum(pNum)
    if (!result) {
        res.status(400).json(result)
    } else {
        res.status(200).json(result)
    }
};

export async function MakeMedicinine(req, res, next) {
    const { M_NUM, M_NAME, M_CORP, M_TYPE, M_MARK_FRONT, M_MARK_BACK, M_COLOR_FRONT, M_COLOR_BACK, M_CHARACTER, M_AXIS_LONG, M_AXIS_SHORT, M_THICKNESS, M_IMAGE } = req.body
    const found = await medicineRepository.findByNum(M_NUM)
    if(found){
        res.status(401).json({message:`${M_NUM}는 이미 존재하는 약품입니다.` })
    }else{
    const result = await medicineRepository.create({
        M_NUM,
        M_NAME,
        M_CORP,
        M_TYPE,
        M_MARK_FRONT,
        M_MARK_BACK,
        M_COLOR_FRONT,
        M_COLOR_BACK,
        M_CHARACTER,
        M_AXIS_LONG,
        M_AXIS_SHORT,
        M_THICKNESS,
        M_IMAGE
    })
    if (!result) {
        res.status(402).json(result)
    } else {
        res.status(200).json(result)
    }
    }
}

export async function ChangeMedicine(req, res, next) {
    const pNum = req.params.id
    const { M_NUM, M_NAME, M_CORP, M_TYPE, M_MARK_FRONT, M_MARK_BACK, M_COLOR_FRONT, M_COLOR_BACK, M_CHARACTER, M_AXIS_LONG, M_AXIS_SHORT, M_THICKNESS, M_IMAGE } = req.body

    const result = await medicineRepository.update(pNum,{M_NUM, M_NAME, M_CORP, M_TYPE, M_MARK_FRONT, M_MARK_BACK, M_COLOR_FRONT, M_COLOR_BACK, M_CHARACTER, M_AXIS_LONG, M_AXIS_SHORT, M_THICKNESS, M_IMAGE})
    
    if (!result) {
        res.status(402).json(result)
    } else {
        res.status(200).json(result)
    }
}

export async function DeleteMedicine(req,res,next){
    const pNum = req.params.id
    const result = await medicineRepository.remove(pNum)

    if (!result) {
        res.status(402).json(result)
    } else {
        res.status(200).json(result)
    }
}




