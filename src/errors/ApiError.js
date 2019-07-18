import X from './X';

const ERROR_CODES = {
    ECONNABORTED : 'INTERNAL_API_TIMEOUT',
    404          : 'INTERNAL_API_RESOURCE_NOT_FOUND'
};

const DEFAULT_ERROR = 'INTERNAL_API_ERROR';

export default class ApiError extends X {
    constructor(error) {
        super(error);
        this.code = error.isAxiosError ? this._getCode(error) : DEFAULT_ERROR;
        if (error.isAxiosError) {
            this.message = this._getMessage(error);
        }
    }

    _getCode(error) {
        return error.isAxiosError
            ? ERROR_CODES[error.code] || ERROR_CODES[error.responce?.status] || DEFAULT_ERROR
            : DEFAULT_ERROR;
    }

    _getMessage(error) {
        const config = error.config;
        const responce = error.responce.status;

        return X.stringify({
            code    : error.code,
            url     : config?.url,
            method  : config?.method,
            headers : config?.headers,
            params  : config?.params,
            data    : config?.data,
            timeout : config?.timeout,
            responce
        });
    }
}
