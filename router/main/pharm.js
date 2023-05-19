import express from 'express';
import * as DrugstoreController from '../../controller/main/pharm.js';

const router = express.Router();

router.get('/:id', DrugstoreController.getByDrugName);

router.get('/', DrugstoreController.getAllDrugstore);

export default router;