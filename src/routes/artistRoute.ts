import express from 'express';
import { artist , getArtist, getAllArtist, deleteArtist,updateArtist} from '../controller/artistController';

const router = express.Router();

router.post('/create-artist', artist)
router.get('/get-one/:id', getArtist)
router.get('/get-all', getAllArtist)
router.delete('/delete/:id', deleteArtist)
router.patch('/update/:id', updateArtist)


export default router;