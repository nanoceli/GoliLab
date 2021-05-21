import { todosPacientes } from '../controllers/paciente'
const server = require("express").Router()
require("dotenv").config();

server.get('/', todosPacientes)

export default server