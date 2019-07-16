import X from 'errors/X';
import BaseService from 'services/Base';
import { isObject } from 'utils/common';

function buildController(o, makeServiceRunner) {
    const build = {};

    Object.keys(o).forEach(function (key) {
        const current = o[key];

        if (isObject(current)) {
            return build[key] = buildController(current, makeServiceRunner);
        }

        if (current?.prototype instanceof BaseService) {
            return build[key] = makeServiceRunner(current);
        }

        build[key] = current;
    });

    return build;
}

export default class BaseController {
    constructor(config) {
        if (config) {
            return buildController(config, this.makeServiceRunner);
        }
    }

    runService(Service, { context, params }) {
        const service = new Service({ context });

        return service.run(params);
    }

    async run(promise) {
        try {
            const data = await promise;

            return {
                ...data,
                status : 1
            };
        } catch (err) {
            const error = new X(err);

            return {
                error  : error.render(),
                status : 0
            };
        }
    }

    makeServiceRunner = (serviceClass, paramsBuilder, contexBuilder) => {
        return this.serviceRunner.bind(this, { serviceClass, paramsBuilder, contexBuilder });
    }
}
