import { inspect } from 'util';
import axios from 'axios';
import ms from 'ms';
import config from './config';
import { dumpUpdate } from './utils/dump';
import Poll from './polling';

class ApiClient {
    constructor({ id, token, polling }) {
        this.baseUrl = `https://api.telegram.org/bot${id}:${token}`;
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

    async _request(options) {
        try {
            const { data:response } = await axios({
                timeout : 10000,
                ...options
            });

            if (!response.ok) throw response;

            return response.result;
        } catch (error) {
            console.log('TELEGRAM_API_ERROR', error);
            throw error;
        }
    }

    getUpdates = async () => {
        console.log('this.pollTimeout: ', this.pollTimeout);
        const data = await this._request({
            method : 'GET',
            url    : `${this.baseUrl}/getUpdates`,
            params : {
                limit   : 10,
                offset  : this.lastUpdate + 1,
                timeout : this.pollTimeout
            }
        });

        console.log(inspect(data, { showHidden: false, depth: null }));

        return data.map(dumpUpdate);
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

export default new ApiClient({
    id      : config.bot_id,
    token   : config.bot_token,
    polling : config.polling
});

