import telegram from 'lib/telegram';
import { dumpUpdate } from 'utils/dump';
import Base from './Base';

export default class SetWebhook extends Base {
    async run(tgUpdate) {
        const update = dumpUpdate(tgUpdate);

        await telegram.processUpdate(update);
    }
}
