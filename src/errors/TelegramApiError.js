import X from './X';
import AxiosError from './AxiosError';

export default class TelegramApiError extends X {
    constructor(error) {
        super(error);
        this.parent = error;
    }
    get code() {
        if (this.parent instanceof AxiosError) {
            return 'TELEGRAM_API_ERROR';
        }

        return 'UNKNOWN_ERROR';
    }
    get message() {
        if (this.parent instanceof X) {
            return this.parent.message;
        }

        return X.stringify({
            message : this.parent.toString()
        });
    }
}
