// projectService.js
class ProjectService {
    constructor(databaseClient) {
      this.db = databaseClient;
    }
  
    async hasAvailableSlots(projectId) {
      const project = await this.db.getProjectById(projectId);
      return project && project.cupos > 0;
    }
  
    /**
     * Intenta agregar un nuevo proyecto.
     * @param {{ id: number, nombre: string, cupos: number }} project
     * @returns {Promise<boolean>} – True si se agregó, False si ya existía.
     */
    async addProject(project) {
      // 1) Vemos si ya existe por nombre (podría usar id u otro campo único)
      const existing = await this.db.getProjectByName(project.nombre);
      if (existing) {
        return false; // YA existía → no agrega
      }
      // 2) No existe → lo insertamos
      await this.db.insertProject(project);
      return true;
    }
  }
  
  module.exports = { ProjectService };
  