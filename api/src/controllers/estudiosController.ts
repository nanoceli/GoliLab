import * as mongoose from 'mongoose';
import { Estudios } from '../model/estudio';
import { Request, Response } from 'express';

const Estudio = mongoose.model('Estudio', Estudios);

export class EstudioController {

    public obtenerEstudios(req: Request, res: Response) {
        Estudio.find({}, (err, est) => {
            if (err) {
                res.send(err);
            }
            res.json(est);
        });
    }

    public obtenerEstudioId(req: Request, res: Response) {
        Estudio.findById(req.params.estudioId, (err, est) => {
            if (err) {
                res.send(err);
            }
            res.json(est);
        });
    }

    public agregarEstudio(req: Request, res: Response) {
        let newTask = new Estudio(req.body);

        newTask.save((err, est) => {
            if (err) {
                res.send(err);
            }
            res.json(est);
        });
    }

    public updateTask(req: Request, res: Response) {
        Estudio.findOneAndUpdate({ _id: req.params.taskId }, req.body, { new: true }, (err, task) => {
            if (err) {
                res.send(err);
            }
            res.json(task);
        });
    }

    public deleteTask(req: Request, res: Response) {
        Estudio.remove({ _id: req.params.taskId }, (err) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted task!' });
        });
    }
}