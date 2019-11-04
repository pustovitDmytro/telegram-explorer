import { assert } from 'chai';
import config from 'config';
import request from '../request';
import { seeds } from '../Test';

const { messages } = seeds;

suite('Process Updates');

test('Positive: Process Updates', async () => {
    const message = messages[0];
    const update = {
        'update_id' : 436001190,
        message
    };

    await request
        .post(`/api/v1/updates/${config.updates.webhook}`)
        .send(update)
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(({ body }) => {
            assert.ok(body.status);
        });
});
