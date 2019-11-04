import supertest from 'supertest';
import 'src/load';
import nodeApp from 'src/app';

supertest.agent(nodeApp);

export default supertest.agent(nodeApp);
