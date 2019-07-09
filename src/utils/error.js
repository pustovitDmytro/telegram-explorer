
class X extends Error {}

function clone(x) {
    return JSON.parse(JSON.stringify(x));
}

export class AxiosError extends X {
    constructor(error) {
        super(error);
        this.parent = error;
    }
    get code() {
        return this.parent.isAxiosError
            ? {
                ECONNABORTED : 'TIMEOUT'
            }[this.parent.code] || 'UNKNOWN_ERROR'
            : 'INTERNAL_ERROR';
    }
    get public() {
        const config = this.parent.config;

        return clone({
            message : this.parent.toString(),
            url     : config?.url,
            method  : config?.method,
            headers : config?.headers,
            params  : config?.params,
            data    : config?.data,
            timeout : config?.timeout
        });
    }
    get stack() {
        return this.parent.stack;
    }
}

export class TelegramApiError extends X {
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
    get public() {
        if (this.parent instanceof X) {
            return this.parent.public;
        }

        return clone({
            message : this.parent.toString()
        });
    }
    get stack() {
        return this.parent.stack;
    }
}

