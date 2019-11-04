#!./node_modules/.bin/babel-node
import { docopt } from 'docopt';
import DocoptController from 'controllers/Base/DocoptController';
import setWebhook from 'services/SetWebhook';

const doc = `Usage:
   telegram.js -h | --help
   telegram.js setWebhook [<url>] [--confirm] [--verbose]
Options:
   -h --help       Telegram management api commans
   -y --confirm    Confirm the operation
   -v --verbose    Verbose output
   <url>           HTTPS url to set webhook
`;

const controllers = new DocoptController({ setWebhook });

async function main(opts) {
    try {
        const commandName = Object.keys(controllers).find(c => opts[c]);

        if (!commandName) throw new Error(`Wrong command${commandName}`);
        await controllers[commandName](opts);

        console.log('DONE');
        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

main(docopt(doc));
