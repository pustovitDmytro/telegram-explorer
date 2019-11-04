import { version, description } from '../../package.json';
import Base from './Base';

export default class InfoShow extends Base {
    async run() {
        return {
            version,
            description
        };
    }
}
