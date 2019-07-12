import Info from '../services/Info';
import ExpressController from './Base/ExpressController';

const controller = new ExpressController();

const system = {
    health : (req, res) => res.sendStatus(200),
    info   : controller.makeServiceRunner(Info)
};

export default {
    system
};

