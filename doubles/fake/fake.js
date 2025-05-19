// Clase real que contiene la lógica de negocio para verificar cupos de proyectos solidarios
class ProjectService {
  // Se recibe como dependencia un cliente de base de datos (puede ser real o fake)
  constructor(databaseClient) {
    this.db = databaseClient;
  }

  /**
   * Verifica si un proyecto tiene cupos disponibles.
   * @param {number} projectId - El ID del proyecto a consultar.
   * @returns {Promise<boolean>} - True si hay cupo, False si no.
   */
  async hasAvailableSlots(projectId) {
    // Consulta el proyecto desde la base de datos (o desde un fake en pruebas)
    const project = await this.db.getProjectById(projectId);

    // Devuelve true si el proyecto existe y tiene más de 0 cupos
    return project && project.cupos > 0;
  }
}

// Se exporta para ser usado tanto en producción como en pruebas automatizadas
module.exports = { ProjectService };
