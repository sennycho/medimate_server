import express from 'express';
import * as DrugstoreController from '../../controller/main/pharm.js';
import { isAuth } from '../../middleware/token.js'


const router = express.Router();

router.get('/:id', isAuth,DrugstoreController.getByDrugName);

router.get('/', isAuth,DrugstoreController.getAllDrugstore);

export default router;