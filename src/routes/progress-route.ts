import express from 'express';
import ProgressController from '../controllers/progress-controller';

const route = express.Router();

route.post('/create', new ProgressController().create);

export default route;