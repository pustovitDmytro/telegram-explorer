import TelegramError from 'errors/TelegramError';
import { dumpUpdate, dumpMessage } from 'utils/dump';
import { log } from 'lib/logger';
import ApiClient from './ApiClient';

export default class TelegramApiClient extends ApiClient {
    @log
    async request() {
        if (this.mock) return;
        try {
            const response = await super.request(...arguments);

            if (!response.ok) throw new TelegramError(response);

            return response.result;
        } catch (error) {
            throw new TelegramError(error);
        }
    }

    async getUpdates(lastUpdate = 0) {
        if (this.mock) return [];
        const data = await this.get('/getUpdates', {
            limit  : 10,
            offset : lastUpdate + 1
        });

        return data.map(dumpUpdate);
    }

    async sendMessage(chatId, html) {
        const data = await this.post('/sendMessage', {
            'parse_mode' : 'HTML',
            'chat_id'    : chatId,
            text         : html
        });

        return dumpMessage(data);
    }

    async setWebhook(url) {
        const data = await this.post('/setWebhook', {
            url
        });

        if (data) return url;
    }

    async getWebhook() {
        const data = await this.get('/getWebhookInfo');

        return data.url;
    }
}
