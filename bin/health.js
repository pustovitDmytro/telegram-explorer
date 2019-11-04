#!./node_modules/.bin/babel-node
import { docopt } from 'docopt';
import DocoptController from 'controllers/Base/DocoptController';
import Info from 'services/Info';

const doc = `Usage:
   telegram.js -h | --help
   telegram.js info
   telegram.js
Options:
   -h --help       Telegram management api commans
`;

function health() {
    console.log('Ok');
    process.exit(0);
}

const controllers = new DocoptController({
    info : Info,
    health
});

async function main(opts) {
    try {
        const commandName = Object.keys(controllers).find(c => opts[c]) || 'health';

        // if (!commandName) throw new Error(`Wrong command ${commandName}`);
        await controllers[commandName](opts);

        console.log('DONE');
        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

main(docopt(doc));
