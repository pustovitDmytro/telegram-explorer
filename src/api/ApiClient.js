import axios from 'axios';
import ms from 'ms';
import AxiosError from 'errors/AxiosError';

export default class Api {
    constructor({ timeout, url }) {
        this.timeout = ms(timeout);
        this.url = url;
    }
    _getUrl(url) {
        return `${this.url}${url}`;
    }
    async request(method, url, options) {
        try {
            const response = await axios({
                timeout : this.timeout,
                method,
                url     : this._getUrl(url),
                ...options
            });

            return response.data;
        } catch (error) {
            throw new AxiosError(error);
        }
    }
    get(url, params) {
        return this.request('GET', url, {
            params
        });
    }
    post(url, data) {
        return this.request('POST', url, {
            data
        });
    }
}