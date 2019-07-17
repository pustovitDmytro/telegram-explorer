import X from './X';

export default class AxiosError extends X {
    constructor(error) {
        if (error instanceof X) return error;
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
    get message() {
        const config = this.parent.config;

        return X.stringify({
            message : this.parent.toString(),
            code    : this.parent.code,
            url     : config?.url,
            method  : config?.method,
            headers : config?.headers,
            params  : config?.params,
            data    : config?.data,
            timeout : config?.timeout
        });
    }
}
