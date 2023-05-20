import express from 'express';
import * as DrugstoreController from '../../controller/admin/drugstore.js';
import { isAuth } from '../../middleware/token.js'

const router = express.Router();


router.post('/', isAuth,DrugstoreController.createDrugstore);

router.get('/:id', isAuth,DrugstoreController.searchDrugNum);

router.get('/:id',isAuth, DrugstoreController.searchDrugName);

router.get('/', isAuth,DrugstoreController.getAllDrugstore);

router.put('/:id', isAuth,DrugstoreController.updateDrugstore);

router.delete('/:id', isAuth,DrugstoreController.deleteDrugstore);

export default router;