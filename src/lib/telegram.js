// import { inspect } from 'util';
import ms from 'ms';
import config from 'config';
import { dumpUpdate, dumpMessage } from 'utils/dump';
import TelegramApiClient from '../api/TelegramApiClient';
import Poll from './polling';
import handlebars from './handlebars';

class TelegramApi {
    constructor({ id, token, polling }) {
        this.api = new TelegramApiClient({
            timeout : '10s',
            url     : `https://api.telegram.org/bot${id}:${token}`
        });
        this.ready = this._init({ polling });
    }
    _init({ polling }) {
        if (polling) return this._initPolling(polling);
    }
    _initPolling(pollingTime) {
        this.lastUpdate = 0;
        this.pollTimeout = ms(pollingTime);
        const poll = new Poll({
            timeout : this.pollTimeout,
            run     : this.polling
        });

        poll.start();
        console.log(`POLLING STARTED WITH INTERVAL ${pollingTime}`);
    }
    processUpdate = update => {
        const { message } = update;
        const html = handlebars.templates.REPORT({ message });

        return this.sendMessage(message.from.id, html);
    }
    polling = async () => {
        const updates = await this.getUpdates();

        await handlebars.ready;

        if (updates.length) {
            this.lastUpdate = updates[updates.length - 1].id;
        }

        // console.log(inspect(updates, { showHidden: false, depth: null }));
        await Promise.all(updates.map(this.processUpdate));
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

        return dumpMessage(data);
    }
}

export default new TelegramApi({
    id      : config.bot_id,
    token   : config.bot_token,
    polling : config.polling
});

