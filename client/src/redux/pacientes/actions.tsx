//import { ActionCreator } from 'redux';
//import { USER_LOGIN, PacienteActionTypes, UsuarioInterface } from './types';
import axios from 'axios';

// const updateStoredFeedSuccess: ActionCreator<PacienteActionTypes> = (userLog: UsuarioInterface) => {
//     return { type: USER_LOGIN, payload: userLog };
// }

export function usuarioLogin(paciente:{}) {
    return async (dispatch: any) => {
        try {

            let data:{} ={
                nombre: 'Mariano',
                edad: 23,
                obraSocial: 'osde',
                email: 'malejandr@gmail.com'
            }

            let response = await axios.post('http://localhost:3001/paciente', data)
        } catch (e) {
        }


    }
}