import express from 'express';
import { body } from 'express-validator';
import * as adminUserContoller from '../../controller/admin/user.js';

const router = express.Router();

router.get('/', adminUserContoller.showAll);
router.get('/:id', adminUserContoller.showOne);
router.put('/:id', adminUserContoller.modify);
router.delete('/:id', adminUserContoller.drop);

export default router;