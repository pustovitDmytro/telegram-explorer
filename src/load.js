const dependance = {
    config     : [],
    handlebars : [],
    telegram   : [ 'config', 'handlebars' ],
    app        : [ 'config' ]
};

const modules = {
    telegram   : './lib/telegram',
    handlebars : './lib/handlebars',
    config     : './config',
    app        : './app'
};

function resolve(tree) {
    const filtered = new Set();
    const sections = [];
    const nodes =  Object.keys(tree);

    while (filtered.size < nodes.length) {
        const section = nodes.filter(key => {
            const dependent = tree[key];

            return !filtered.has(key) && dependent.every(d => filtered.has(d));
        });

        sections.push(section);
        section.forEach(i => filtered.add(i));
    }

    return sections;
}

export default async function load() {
    const sections = resolve(dependance);

    for (const section of sections) {
        await Promise.all(section
            .map(k => modules[k])
            .map(path => {
                const entity = require(path);
                const promise = entity.default.ready || entity.ready; // TODO isPromise

                return promise;
            }));
    }
}

load();

