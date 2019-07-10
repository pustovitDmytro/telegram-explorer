import express from 'express';

const router = express.Router();

router.get('/health', (req, res) => {
    res.sendStatus(200);
});

router.get('/info', (req, res) => {
    res.send({
        version : '0.0.1',
        service : 'Telegram Bot'
    });
});

export default router;
