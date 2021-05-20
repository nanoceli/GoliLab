import { PacienteController } from "../controllers/pacientesController";
import { EstudioController } from "../controllers/estudiosController";

export class Routes {

    public pacienteController: PacienteController = new PacienteController();
    public estudioController: EstudioController = new EstudioController();

    public routes(app): void {

        app.route('/pacientes')
            .get(this.pacienteController.obtenerPacientes)
            .post(this.pacienteController.agregarPaciente)

        app.route('/pacientes/:pacienteId')
            .get(this.pacienteController.obtenerPacienteId)
            .put(this.pacienteController.updateTask)
            .delete(this.pacienteController.deleteTask)

        app.route('/estudios')
            .get(this.estudioController.obtenerEstudios)
            .post(this.estudioController.agregarEstudio)

        app.route('/pacientes/:estudioId')
            .get(this.pacienteController.obtenerPacienteId)
            .put(this.pacienteController.updateTask)
            .delete(this.pacienteController.deleteTask)

    }
}