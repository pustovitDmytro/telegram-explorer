import './lib/telegram';
import express  from 'express';
import router   from 'controllers/express/router';
import middlewares from 'controllers/express/middlewares';
import logger from 'lib/logger';
import config   from './config';

const { port, prefix } = config.app;
const app = express();

app.use(middlewares.json);
app.use(middlewares.urlencoded);
app.use(middlewares.cors);
app.use(middlewares.arrays);

app.use(prefix, router);

app.listen(port, () => {
    logger.log(`APP STARTING AT ${port} PORT`);
});

export default app;
