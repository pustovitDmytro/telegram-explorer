import './lib/telegram';
import express  from 'express';
import router   from './controllers/router';
import config   from './config';

const { port, prefix } = config;
const app = express();

app.use(prefix, router);

app.listen(port, () => {
    console.log(`APP STARTING AT ${port} PORT`);
});

export default app;

