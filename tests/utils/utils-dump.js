import { assert } from 'chai';
import {
    dumpMessage
} from 'utils/dump';
import { seeds } from '../Test';

const { messages } = seeds;

suite('Dump Utils');

test('Positive: dumpMessage', async () => {
    const message = messages[0];

    const dumped = dumpMessage(message);

    assert.exists(dumped);
    assert.deepEqual(dumped.from, {
        'id'    : 271381498,
        'name'  : 'Rolin Rooney',
        'login' : 'csprowle0',
        'type'  : 'BOT'
    });
    assert.deepEqual(dumped.to, {
        id      : -1001201042076,
        type    : 'CHANNEL',
        'name'  : 'FOOTBALL.UA',
        'login' : 'footballuaonline'
    });
    assert.deepEqual(dumped.date, '2019-04-11T13:43:25.000Z');
});


test('Positive: forwarded from bot:', async () => {
    const message = messages[1];
    const dumped = dumpMessage(message);

    assert.exists(dumped);
    assert.deepEqual(dumped.from, {
        id      : 252828349,
        type    : 'USER',
        name    : 'Mechic Bev',
        login   : 'hconeybeare1',
        forward : {
            'date'  : '2019-11-03T23:06:33.000Z',
            'name'  : 'BotFather',
            'id'    : 93372553,
            'login' : 'BotFather',
            'type'  : 'BOT'
        }
    });
});


test('Positive: forwarded from chat:', async () => {
    const message = messages[2];
    const dumped = dumpMessage(message);

    assert.exists(dumped);
    assert.deepEqual(dumped.from, {
        'id'    : 37493274923,
        'name'  : 'Mendoza Ola',
        'login' : 'dac@hupji.net',
        'type'  : 'USER',
        forward : {
            'id'    : -1001201042076,
            'name'  : 'FOOTBALL.UA',
            'login' : 'footballuaonline',
            'type'  : 'CHANNEL',
            'date'  : '2019-11-03T21:58:00.000Z'
        }
    });
    assert.deepEqual(dumped.to, {
        id      : 398084023,
        type    : 'USER',
        'name'  : 'Perry Lettie',
        'login' : 'degake@bul.jp'
    });
});
