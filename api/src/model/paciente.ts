import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const Pacientes = new Schema({
    nombre: {
        type: String,
        required: 'Nombre'
    },
    edad: {
        type: Number,
        required: 'Edad'
    },
    obraSocial: {
        type: Date,
        default: Date.now        
    },
    scheduled: {
        type: Date   
    },
    done: {
        type: Date         
    }
});