import { USER_LOGIN, UsuarioInterface, PacienteActionTypes } from "./types";

const initialState = {
    userLog: {}
};

function PacienteReducer(state = initialState, action: PacienteActionTypes){
    switch (action.type) {
        case USER_LOGIN: {
            return {
                ...state,
                userLog: action.payload
            };
        }
        default:
            return state
    }
};

export default PacienteReducer