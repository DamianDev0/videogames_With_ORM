import { Router } from 'express';
import {gameRouter, developerRouter,userRouter,fileRouter} from './';

const router = Router();

router.use('/games', gameRouter);
router.use('/developers', developerRouter);
router.use('/users', userRouter);
router.use('/uploads', fileRouter);

export default router;
