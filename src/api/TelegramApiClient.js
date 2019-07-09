import TelegramApiError from 'errors/TelegramApiError';
import ApiClient from './ApiClient';

export default class TelegramApiClient extends ApiClient {
    async request() {
        try {
            const response = await super.request(...arguments);

            if (!response.ok) throw new TelegramApiError(response);

            return response.result;
        } catch (error) {
            if (error instanceof TelegramApiError) throw error;
            throw new TelegramApiError(error);
        }
    }
}
