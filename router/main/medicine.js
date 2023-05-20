import express from 'express';
import * as Medicine from '../../controller/main/medicine.js'

const router = express.Router();


router.get('/',Medicine.SearchMedicineAll)
router.get('/:id',Medicine.SearchMedicineOne)


export default router