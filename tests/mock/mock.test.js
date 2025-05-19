// Importamos desde la ruta donde están los fakes y lógica
const {
    ApplicationService,
    FakeApplicationDatabase,
  } = require('../../doubles/mock/mock');
  
  describe('Aplicación única por proyecto', () => {
    test('rechaza postulación si el estudiante ya aplicó al mismo proyecto', async () => {
      const fakeDb = new FakeApplicationDatabase();
      const service = new ApplicationService(fakeDb);
  
      const result = await service.submitApplication({ studentId: '123', projectId: 1 });
      expect(result).toBe(false); // Ya existía → se rechaza
    });
  
    test('acepta postulación si el estudiante no ha aplicado antes', async () => {
      const fakeDb = new FakeApplicationDatabase();
      const service = new ApplicationService(fakeDb);
  
      const result = await service.submitApplication({ studentId: '456', projectId: 2 });
      expect(result).toBe(true); // No existía → se acepta
  
      const duplicated = await service.hasAlreadyApplied('456', 2);
      expect(duplicated).toBe(true); // Confirmamos que se guardó
    });
  });
  