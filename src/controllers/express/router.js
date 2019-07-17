import express from 'express';
import config from 'config';
import controllers from './сontrollers';

const router = express.Router();

router.get('/health', controllers.system.health);
router.get('/info', controllers.system.info);

router.post(`/updates/${config.webhook}`, controllers.updates.process);

export default router;
