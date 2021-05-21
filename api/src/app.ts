const express = require('express')
const cors = require('cors')
import Routes from "./routes/index"

const server: any = express()

server.use(cors())
server.use(Routes)

export default server


