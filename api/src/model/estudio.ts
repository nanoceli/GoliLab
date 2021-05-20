import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const Estudios = new Schema({
    nombre: {
        type: String,
        required: 'Nombre'
    },
    descripcion: {
        type: String,
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