import { inspect } from 'util';
import Decorator from 'logger-decorator';

export const log = (new Decorator({
    logger : (level, data) => {
        console.log(inspect(data, { breakLength: 'Infinity', depth: 4, maxArrayLength: 10, colors: true }));
    }
}))();

export default console;
