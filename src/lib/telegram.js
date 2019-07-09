import { inspect } from 'util';
import ms from 'ms';
import config from 'config';
import { dumpUpdate } from 'utils/dump';
import TelegramApiError from 'errors/TelegramApiError';
import Poll from './polling';
import TelegramApiClient from './api/TelegramApiClient';

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

        if (updates.length) {
            this.lastUpdate = updates[updates.length - 1].id;
        }

        console.log(inspect(updates, { showHidden: false, depth: null }));
    }

    getUpdates = async () => {
        try {
            const data = await this.api.get('/getUpdates', {
                limit  : 10,
                offset : this.lastUpdate + 1
                // timeout : this.pollTimeout
            });

            return data.map(dumpUpdate);
        } catch (error) {
            throw new TelegramApiError(error);
        }
    }

    // async sendMessage(chatId, template) {
    //     return axios({
    //         method : 'POST',
    //         data   : {
    //             'parse_mode' : 'HTML',
    //             text         : template,
    //             'chat_id'    : chatId
    //         },
    //         timeout : 10000,
    //         url     : `${this.baseUrl}/sendMessage`
    //     });
    // }

    // async sendMeme(chatId, fileId) {
    //     return axios({
    //         method : 'POST',
    //         data   : {
    //             document  : fileId,
    //             'chat_id' : chatId
    //         },
    //         timeout : 10000,
    //         url     : `${this.baseUrl}/sendDocument`
    //     });
    // }
}

export default new TelegramApi({
    id      : config.bot_id,
    token   : config.bot_token,
    polling : config.polling
});

