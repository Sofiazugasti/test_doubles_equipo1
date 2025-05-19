class ApplicationService {
    constructor(databaseClient) {
      this.db = databaseClient;
    }
  
    async hasAlreadyApplied(studentId, projectId) {
      return !!(await this.db.getApplication(studentId, projectId));
    }
  
    async submitApplication(application) {
      const alreadyApplied = await this.hasAlreadyApplied(application.studentId, application.projectId);
      if (alreadyApplied) return false;
  
      await this.db.saveApplication(application);
      return true;
    }
  }
  
  module.exports = { ApplicationService };
  