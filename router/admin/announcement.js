import express from 'express';
import * as AnnounceController from '../../controller/admin/announcement.js';

const router = express.Router();


router.post('/', AnnounceController.createAnnounce);

router.get('/:id', AnnounceController.searchAnnounceNum);

router.get('/:id', AnnounceController.searchAnnounceByTitle);

router.get('/', AnnounceController.getAllAnnounce);

router.put('/:id', AnnounceController.updateAnnounce);

router.delete('/:id', AnnounceController.deleteAnnounce);

export default router;