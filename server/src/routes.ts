import express, { request, response } from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionController from './controllers/ConnectionControllers';

const routes = express.Router();
const classesController = new ClassesController();
const connectionCotrollers = new ConnectionController();

routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.get('/connections', connectionCotrollers.index);
routes.post('/connections', connectionCotrollers.create);


export default routes;