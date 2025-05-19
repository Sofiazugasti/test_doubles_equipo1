// Fake de base de datos para pruebas
class FakeApplicationDatabase {
  constructor() {
    this.applications = [
      { studentId: '123', projectId: 1 }, // Ya aplicado
    ];
  }

  async getApplication(studentId, projectId) {
    return this.applications.find(
      (a) => a.studentId === studentId && a.projectId === projectId
    );
  }

  async saveApplication(application) {
    this.applications.push(application);
  }
}

// Servicio que contiene la lógica de negocio
class ApplicationService {
  constructor(databaseClient) {
    this.db = databaseClient;
  }

  async hasAlreadyApplied(studentId, projectId) {
    const existing = await this.db.getApplication(studentId, projectId);
    return !!existing;
  }

  async submitApplication(application) {
    const alreadyApplied = await this.hasAlreadyApplied(application.studentId, application.projectId);
    if (alreadyApplied) return false;

    await this.db.saveApplication(application);
    return true;
  }
}

module.exports = {
  ApplicationService,
  FakeApplicationDatabase,
};
