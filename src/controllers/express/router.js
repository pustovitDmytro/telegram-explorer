import express from 'express';
import config from 'config';
import controllers from './сontrollers';

const router = express.Router();

router.get('/health', controllers.system.health);
router.get('/info', controllers.system.info);

if (config.updates.mode === 'webhook' || process.env.MODE === 'test') {
    router.post(`/updates/${config.updates.webhook}`, controllers.updates.process);
}

export default router;
