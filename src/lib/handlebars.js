import path       from 'path';
import handlebars from 'handlebars';
import fs         from 'fs-extra';
import logger     from 'lib/logger';

handlebars.registerHelper('json', function (object) {
    return JSON.stringify(object, null, 4);
});

handlebars.registerHelper('lower', function (string) {
    return string.toLowerCase();
});

class Handlebars {
    constructor({ templatesFolder }) {
        this.ready = this._init(templatesFolder);
    }
    async _init(folder) {
        const templateFileNames = await fs.readdir(folder);

        this.templateNames = templateFileNames.map(filename => path.basename(filename, '.html'));
        this.templates = {};
        await Promise.all(this.templateNames.map(async name => {
            const fullFilePath = path.join(folder, `${name}.html`);
            const content = await fs.readFile(fullFilePath);

            this.templates[name] = handlebars.compile(content.toString());
        }));
        logger.verbose('HANDLEBARS TEMPLATES READY');
    }
}

export default new Handlebars({
    templatesFolder : path.join(__dirname, '../../templates/')
});
