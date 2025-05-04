
  import { Router } from 'express';
  
const router = Router();

router.get('/', (req, res) => {
  res.send('Stats route is working!');
}
)
  
  export default router;
  