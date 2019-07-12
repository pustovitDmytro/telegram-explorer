import express from 'express';
import controllers from './expressControllers';

const router = express.Router();

router.get('/health', controllers.system.health);
router.get('/info', controllers.system.info);

export default router;
