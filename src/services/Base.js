import logger from 'lib/logger';

export default class BaseService {
    constructor({ context, options = {} }) {
        this.context = context;
        this.options = options;
    }

    validate() {}

    verbose() {
        const level = this.options.verbose ? 'log' : 'debug';

        logger[level](...arguments);
    }

    get confirm() {
        return this.options.confirm;
    }
}
