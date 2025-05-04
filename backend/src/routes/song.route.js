import { Router } from 'express';
import { getAllAlbums } from '../controller/album.controller';
import {protectRoute, requireAdmin} from '../middleware/auth.middleware.js';

const router = Router();

router.get('/',protectRoute , requireAdmin ,getAllSongs);

router.get('/featured',getFeaturedSongs);
router.get('/made-for-you',getMadeForYouSongs);
router.get('/trending',getTrendingSongs);

export default router;
  