import './lib/telegram';
import express  from 'express';
import router   from 'controllers/express/router';
import middlewares from 'controllers/express/middlewares';
import config   from './config';


const { port, prefix } = config;
const app = express();

app.use(middlewares.json);
app.use(middlewares.urlencoded);
app.use(middlewares.cors);
app.use(middlewares.arrays);

app.use(prefix, router);

app.listen(port, () => {
    console.log(`APP STARTING AT ${port} PORT`);
});

export default app;
