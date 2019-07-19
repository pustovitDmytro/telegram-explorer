import telegram from 'lib/telegram';
import config from 'config';
import Base from './Base';

const webhookUrl = `${config.host}${config.prefix}/updates/${config.webhook}`;

export default class SetWebhook extends Base {
    async run({ url = webhookUrl }) {
        let current = await telegram.getWebhook();

        this.verbose('current WebhookUrl: ', current);
        if (this.confirm) {
            current = await telegram.setWebhook(url);
        }

        return { data: current  };
    }
}
