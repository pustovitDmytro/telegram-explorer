import { inspect } from 'util';
import ms from 'ms';
import config from 'config';
import { dumpUpdate } from 'utils/dump';
import TelegramApiClient from '../api/TelegramApiClient';
import Poll from './polling';
import handlebars from './handlebars';

class TelegramApi {
    constructor({ id, token, polling }) {
        this.api = new TelegramApiClient({
            timeout : '10s',
            url     : `https://api.telegram.org/bot${id}:${token}`
        });
        if (polling) {
            this.lastUpdate = 0;
            this.pollTimeout = ms(polling);
            const poll = new Poll({
                timeout : this.pollTimeout,
                run     : this.polling
            });

            poll.start();
        }
    }
    polling = async () => {
        const updates = await this.getUpdates();

        await handlebars.ready;

        if (updates.length) {
            this.lastUpdate = updates[updates.length - 1].id;
        }

        console.log(inspect(updates, { showHidden: false, depth: null }));
        await Promise.all(updates.map(update => {
            const html = handlebars.templates.REPORT({ update });

            console.log('html: ', html);

            return this.sendMessage('238585617', html);
        }));
    }

    getUpdates = async () => {
        const data = await this.api.get('/getUpdates', {
            limit  : 10,
            offset : this.lastUpdate + 1
            // timeout : this.pollTimeout
        });

        return data.map(dumpUpdate);
    }

    async sendMessage(chatId, text) {
        const data = await this.api.post('/sendMessage', {
            'parse_mode' : 'HTML',
            'chat_id'    : chatId,
            text
        });

        console.log('data: ', data);

        return data;
    }
}

export default new TelegramApi({
    id      : config.bot_id,
    token   : config.bot_token,
    polling : config.polling
});

