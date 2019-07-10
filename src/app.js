// import './lib/telegram';
import express     from 'express';
import router      from './router';

const app = express();

app.use('/api/v1', router);
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`APP STARTING AT ${port} PORT`);
});
