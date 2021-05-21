import { Router } from "express"
import pacientes from "./pacientes"

const router: Router = Router()

router.use("/paciente", pacientes)

export default router