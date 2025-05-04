import { Router } from 'express';
 import { createSong } from '../controller/admin.controller.js'; 
 import { protectRoute, requireAdmin } from '../middleware/auth.middleware.js';


const router = Router();

router.use(protectRoute, requireAdmin);

router.get('/check', checkAdmin);

router.post('/songs',  createSong);
router.delete('/songs/:idx', deleteSong);
  

router.post('/albums' , createAlbum);
router.delete('/songs/:idx', deleteAlbum);
  
export default router;
  