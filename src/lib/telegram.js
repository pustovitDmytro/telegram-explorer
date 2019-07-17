// import { inspect } from 'util';
import ms from 'ms';
import config from 'config';
import TelegramApiClient from '../api/TelegramApiClient';
import Poll from './polling';
import handlebars from './handlebars';

const isTest = process.env.MODE === 'test';

class TelegramApi {
    constructor({ id, token, polling }) {
        this.api = new TelegramApiClient({
            timeout : '10s',
            url     : `https://api.telegram.org/bot${id}:${token}`,
            mock    : isTest
        });
        this.ready = this._init({ polling });
    }
    _init({ polling }) {
        if (polling) return this._initPolling(polling);
    }
    _initPolling(pollingTime) {
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
        const updates = await this.api.getUpdates(this.lastUpdate);

        if (updates.length) {
            this.lastUpdate = updates[updates.length - 1].id;
        }

        await Promise.all(updates.map(this.processUpdate));
    }

    sendMessage(chat, message) {
        return this.api.sendMessage(chat.id, message);
    }
    setWebhook(url) {
        return this.api.setWebhook(url);
    }
    getWebhook() {
        return this.api.getWebhook();
    }
}

export default new TelegramApi({
    id      : config.bot_id,
    token   : config.bot_token,
    polling : config.polling
});

