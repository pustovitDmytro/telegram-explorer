// import { log } from '../../logger';
import Base from './BaseController';

export default class ExpressController extends Base {
    static paramsBuilder = req => ({ ...req.query, ...req.params, ...req.body })
    static contexBuilder = req => req._context

    async serviceRunner({
        serviceClass,
        paramsBuilder = ExpressController.paramsBuilder,
        contexBuilder = ExpressController.contexBuilder
    }, req, res) {
        // const runService = log(this.runService);
        const runService = this.runService;
        const promise = runService(serviceClass, {
            params  : paramsBuilder(req, res),
            context : contexBuilder(req, res)
        });
        const data = await this.run(promise);

        res.send(data);
    }
}
