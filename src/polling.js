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
                console.error('POLL_ERROR', error);
                this.start();
            }
        }, this.timeout);
    }
}
