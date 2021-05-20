import * as mongoose from 'mongoose';
import { Pacientes } from '../model/paciente';
import { Request, Response } from 'express';

const Paciente = mongoose.model('Paciente', Pacientes);

export class PacienteController {

    public obtenerPacientes(req: Request, res: Response) {
        Paciente.find({}, (err, pct) => {
            if (err) {
                res.send(err);
            }
            res.json(pct);
        });
    }

    public obtenerPacienteId(req: Request, res: Response) {
        Paciente.findById(req.params.pacienteId, (err, pct) => {
            if (err) {
                res.send(err);
            }
            res.json(pct);
        });
    }

    public agregarPaciente(req: Request, res: Response) {
        let paciente = new Paciente(req.body);

        paciente.save((err, pct) => {
            if (err) {
                res.send(err);
            }
            res.json(pct);
        });
    }

    public updateTask(req: Request, res: Response) {
        Paciente.findOneAndUpdate({ _id: req.params.taskId }, req.body, { new: true }, (err, task) => {
            if (err) {
                res.send(err);
            }
            res.json(task);
        });
    }

    public deleteTask(req: Request, res: Response) {
        Paciente.remove({ _id: req.params.taskId }, (err) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted task!' });
        });
    }
}