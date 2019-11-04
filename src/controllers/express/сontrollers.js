import Info from '../../services/Info';
import ProcessUpdate from '../../services/ProcessUpdate';
import ExpressController from '../Base/ExpressController';

const controller = new ExpressController({
    system : {
        health : (req, res) => res.sendStatus(200),
        info   : Info
    },
    updates : {
        process : ProcessUpdate
    }
});

export default controller;

