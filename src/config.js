import path from 'path';
import fs from 'fs-extra';

function loadJSON(filePath, defaults = {}) {
    const file = path.resolve(__dirname, filePath);

    return fs.existsSync(file)  // eslint-disable-line no-sync
        ? JSON.parse(fs.readFileSync(file, 'utf8')) // eslint-disable-line no-sync
        : defaults;
}

const appConfig = {
    ...loadJSON('../etc/config.json.defaults'),
    ...loadJSON('../etc/config.json')
};
const env = {};

Object.entries(process.env)
    .forEach(([ key, value ]) => {
        env[key.toLowerCase()] = value;
    });

// TODO validate
// TODO async loading

export default {
    ...appConfig,
    ...env
};

