import express from 'express';
import { artist } from '../controller/artistController';

const router = express.Router();

router.post('/create-artist', artist)


export default router;