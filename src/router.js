import express from 'express';
import { version, description } from '../package.json';

const router = express.Router();

router.get('/health', (req, res) => {
    res.sendStatus(200);
});

router.get('/info', (req, res) => {
    res.send({
        version,
        description
    });
});

export default router;
