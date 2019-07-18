import telegram from 'lib/telegram';
import config from 'config';
import Base from './Base';

const webhookUrl = `${config.host}${config.prefix}/updates/${config.webhook}`;

export default class SetWebhook extends Base {
    async run({ url = webhookUrl }, options) {
        let current = await telegram.getWebhook();

        if (options.verbose) console.log('current WebhookUrl: ', current);
        if (options.confirm) {
            current = await telegram.setWebhook(url);
        }

        return { data: current  };
    }
}
