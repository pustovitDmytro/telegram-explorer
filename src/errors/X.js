import { inspect } from 'util';
import errors, { unknown } from 'constants/errors';

export default class X extends Error {
    constructor(error) {
        super();
        if (error instanceof X) return error;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
        this.parent = error;
    }

    static stringify(data) {
        return inspect(data, {
            showHidden  : false,
            depth       : null,
            breakLength : 'Infinity'
        });
    }

    get stack() {
        return this.parent.stack;
    }

    render() {
        const message = unknown;

        return {
            code : errors[message],
            message
        };
    }
}
