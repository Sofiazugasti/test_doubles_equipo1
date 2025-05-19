class ProjectService {
  constructor(databaseClient) {
    this.db = databaseClient;
  }

  async hasAvailableSlots(projectId) {
    const project = await this.db.getProjectById(projectId);
    return project && project.cupos > 0;
  }
}

module.exports = { ProjectService };
