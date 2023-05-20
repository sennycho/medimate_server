import express from 'express';
import * as AnnounceController from '../../controller/main/announcement.js';
import { isAuth } from '../../middleware/token.js'


const router = express.Router();

router.get('/:id', isAuth, AnnounceController.getAnnounceByTitle);

router.get('/', isAuth, AnnounceController.getAllAnnounce);


export default router;