import { inspect } from 'util';

export default class X extends Error {
    constructor() {
        super();
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
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
}
