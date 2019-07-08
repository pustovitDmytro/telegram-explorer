import { axios } from 'axios';

class ApiClient {
    constructor({ id, token }) {
        this.baseUrl = `https://api.telegram.org/bot${id}:${token}`;
    }

    getUpdates() {
        return axios({
            method : 'GET',
            url    : `${this.baseUrl}/getUpdates`
        });
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

export default new ApiClient({});

