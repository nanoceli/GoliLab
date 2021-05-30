import { ImageSourcePropType } from "react-native"
import * as moment from "moment"

export const USER_LOGIN = "USER_LOGIN"

export interface ImgInterface {
    source: ImageSourcePropType,
    aspect: 'square' | 'portrait' | 'landscape'
}

export interface UsuarioInterface {
    id: String,
    username: string,
    email: string
    foto: ImageSourcePropType
}

export interface PacienteInterface {
    user: UsuarioInterface,
    name: string,
    lastName: string,
    age: number,
    photo: ImageSourcePropType
}

export interface EstudiosInterface {
    user: UsuarioInterface,
    name: string,
    description: string,
    date: moment.Moment
}

export interface TurnosInterface {
    user: UsuarioInterface,
    description:string,
    date: number
}

interface LoginAction {
    type: typeof USER_LOGIN,
    payload: UsuarioInterface
}

export type PacienteActionTypes = LoginAction