import path from 'path';
import fs from 'fs-extra';
import logger from 'lib/logger';

async function loadJSON(filePath) {
    const file = path.resolve(__dirname, filePath);
    const exists = await fs.exists(file);

    if (exists) {
        const json = await fs.readFile(file, 'utf8');

        return JSON.parse(json);
    }
}
async function buildConfig() {
    const [ confDefaults = {}, confCommon = {} ] = await Promise.all([
        '../etc/config.json.defaults',
        '../etc/config.json'
    ].map(loadJSON));

    const appConfig = {
        ...confDefaults,
        ...confCommon
    };
    const env = {};

    Object.entries(process.env)
        .forEach(([ key, value ]) => {
            env[key.toLowerCase()] = value;
        });

    return {
        ...appConfig,
        ...env
    };
}

class Config {
    constructor() {
        this.ready = this._init();
    }
    async _init() {
        const config = await buildConfig();

        logger.verbose('CONFIG LOADED');
        Object.entries(config)
            .forEach(([ key, value ]) => {
                this[key] = value;
            });
    }
}

export default new Config();
