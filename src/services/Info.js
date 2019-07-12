import { version, description } from '../../package.json';

export default class InfoShow {
    async run() {
        return {
            version,
            description
        };
    }
}
