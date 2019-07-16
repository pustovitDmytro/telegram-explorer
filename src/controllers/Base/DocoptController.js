// import { log } from '../../logger';
import Base from './BaseController';

function docoptKey(key) {
    const patterns = [ /--(.+)/, /<(.+)>/ ];

    for (const pattern of patterns) {
        const match = key.match(pattern);

        if (match && match.index === 0) {
            return match[1];
        }
    }
}

function docoptParams(opts, { include, exclude }) {
    const clean = {};

    Object.keys(opts)
        .map(raw => ({ raw, key: docoptKey(raw) }))
        .filter(
            ({ key }) =>
                (include ? include.includes(key) : true)
             && (exclude ? !exclude.includes(key) : true)
        ).forEach(({ raw, key }) => {
            clean[key] = opts[raw];
        });

    return clean;
}


export default class DocoptController extends Base {
    static paramsBuilder = opts => docoptParams(opts, { exclude: [ 'confirm', 'verbose', 'quiet' ] })
    static contexBuilder = opts => opts['--context']
    static optionsBuilder = opts => docoptParams(opts, { include: [ 'confirm', 'verbose', 'quiet' ] })

    async serviceRunner({
        serviceClass,
        paramsBuilder  = DocoptController.paramsBuilder,
        contexBuilder  = DocoptController.contexBuilder,
        optionsBuilder = DocoptController.optionsBuilder
    }, opts) {
        const noExit  = opts['--no-exit'];
        // const runService = log(this.runService);
        const runService = this.runService;
        const promise = runService(serviceClass, {
            params  : paramsBuilder(opts),
            context : contexBuilder(opts),
            options : optionsBuilder(opts)
        });
        const data = await this.run(promise);

        console.log('data: ', data);

        if (!noExit) {
            process.exit(0);
        }
    }
}
