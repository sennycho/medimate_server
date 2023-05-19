import express from 'express';
import * as DrugstoreController from '../../controller/admin/drugstore.js';

const router = express.Router();


router.post('/', DrugstoreController.createDrugstore);

router.get('/:id', DrugstoreController.getByDrugName);

router.get('/', DrugstoreController.getAllDrugstore);

router.put('/', DrugstoreController.updateDrugstore);

router.delete('/:id', DrugstoreController.deleteDrugstore);

export default router;