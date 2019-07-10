import './lib/telegram';
import express     from 'express';
import router      from './router';

console.log('loaded');

const app = express();

app.use('/api/v1', router);
app.listen('8080', () => {
    console.log('APP STARTING');
});
