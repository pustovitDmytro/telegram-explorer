import X from 'errors/X';

export default class BaseController {
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

    makeServiceRunner(serviceClass, paramsBuilder, contexBuilder) {
        return this.serviceRunner.bind(this, { serviceClass, paramsBuilder, contexBuilder });
    }
}
