import { inspect } from 'util';
import errors, { unknown } from 'constants/errors';

export default class X extends Error {
    constructor(error) {
        super();
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
        this.stack = error.stack;
        this.message = error.message;
    }

    static stringify(data) {
        return inspect(data, {
            showHidden  : false,
            depth       : null,
            breakLength : 'Infinity'
        });
    }

    render() {
        const message = unknown;

        return {
            code : errors[message],
            message
        };
    }
}
