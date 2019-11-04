import ms from 'ms';

export function clone(x) {
    return JSON.parse(JSON.stringify(x));
}

export function isString(x) {
    return x && Object.prototype.toString.call(x) === '[object String]';
}

export function isClass(v) {
    return typeof v === 'function' && /^\s*class\s+/.test(v.toString());
}

export function isFunction(x) {
    return x && [ '[object Function]', '[object AsyncFunction]' ].includes(Object.prototype.toString.call(x));
}

export function isEmpty(x) {
    return x && x.constructor === Object && Object.keys(x).length === 0;
}

export function isObject(x) {
    return x && Object.prototype.toString.call(x) === '[object Object]';
}

export function isArray(x) {
    return x && Object.prototype.toString.call(x) === '[object Array]';
}

export function isPromise(x) {
    return x && Object.prototype.toString.call(x) === '[object Promise]';
}

export function toArray(value) {
    if (!value) return [];

    return isArray(value) ? value : [ value ];
}

export function pause(time) {
    return new Promise(res => setTimeout(res, ms(time)));
}
