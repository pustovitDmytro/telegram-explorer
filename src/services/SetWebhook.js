import telegram from 'lib/telegram';
import config from 'config';
import Base from './Base';

const webhookUrl = `${config.host}${config.prefix}/updates/${config.webhook}`;

export default class SetWebhook extends Base {
    async run({ url = webhookUrl }, options) {
        try {
            console.log(1);
            let current = await telegram.getWebhook();

            console.log(2);

            if (options.verbose) console.log('current WebhookUrl: ', current);
            if (options.confirm) {
                current = await telegram.setWebhook(url);
            }

            return { data: current  };
        } catch (e) {
            console.log('before');
            console.log('after');
            throw e;
        }
    }
}
