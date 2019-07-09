export default class Poll {
    constructor({ timeout, run }) {
        this.timeout = timeout;
        this.run = run;
    }
    async start() {
        setTimeout(async () => {
            try {
                await this.run();
                this.start();
            } catch (error) {
                console.error('POLLING_ERROR');
                console.error(error);
                this.start();
            }
        }, this.timeout);
    }
}
