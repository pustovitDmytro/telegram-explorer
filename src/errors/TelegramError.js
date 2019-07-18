import X from './X';
import ApiError from './ApiError';

const DEFAULT_ERROR = 'INTERNAL_TELEGRAM_ERROR';

export default class TelegramError extends X {
    constructor(error) {
        super(error);
        this.code = this._getCode(error);
    }
    _getCode(error) {
        if (error instanceof ApiError) {
            return 'TELEGRAM_API_ERROR';
        }

        return DEFAULT_ERROR;
    }
}
