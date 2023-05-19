import express from 'express';
import * as AnnounceController from '../../controller/admin/announcement.js';

const router = express.Router();


router.post('/', AnnounceController.createAnnounce);

router.get('/:id', AnnounceController.getAnnounceByTitle);

router.get('/', AnnounceController.getAllAnnounce);

router.put('/', AnnounceController.updateAnnounce);

router.delete('/:id', AnnounceController.deleteAnnounce);

export default router;