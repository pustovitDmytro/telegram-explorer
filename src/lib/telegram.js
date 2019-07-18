// import { inspect } from 'util';
import ms from 'ms';
import config from 'config';
import { log } from 'lib/logger';
import TelegramApiClient from '../api/TelegramApiClient';
import Poll from './polling';
import handlebars from './handlebars';

const isTest = process.env.MODE === 'test';

@log
class Telegram {
    constructor({ id, token, polling, mode, webhookUrl }) {
        this.api = new TelegramApiClient({
            timeout : '10s',
            url     : `https://api.telegram.org/bot${id}:${token}`,
            mock    : isTest
        });

        if (mode === 'polling') this._initPolling(polling);
        if (mode === 'webhook') this._initWebhook(webhookUrl);
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
    async _initWebhook(webhookUrl) {
        if (webhookUrl !== this.getWebhook()) {
            await this.setWebhook(webhookUrl);
            console.log(`WEBHOOK_URL SET TO ${webhookUrl}`);
        } else {
            console.log(`WEBHOOK_URL HAS ALREADY SET TO ${webhookUrl}`);
        }
    }
    processUpdate = update => {
        const { message } = update;
        const html = handlebars.templates.REPORT({ message });

        return this.sendMessage(message.from, html);
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

export default new Telegram({
    id         : config.bot_id,
    token      : config.bot_token,
    polling    : config.polling,
    mode       : config.updates_mode,
    webhookUrl : `${config.host}${config.prefix}/updates/${config.webhook}`
});

