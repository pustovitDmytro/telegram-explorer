import supertest from 'supertest';
import nodeApp from 'app';

supertest.agent(nodeApp);

export default supertest.agent(nodeApp);
