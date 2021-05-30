import { combineReducers } from 'redux';
import PacienteReducer from './pacientes/reducer';

export const rootReducer = combineReducers({
    pacientes: PacienteReducer
});

export type RootState = ReturnType<typeof rootReducer>;