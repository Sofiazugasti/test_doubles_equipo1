const { ApplicationService } = require('../../doubles/spy/spy');

describe('Spies sobre llamadas a métodos', () => {
  test('llama a saveApplication si no hay duplicado', async () => {
    // Creamos una base de datos fake con métodos espías
    const fakeDb = {
      getApplication: jest.fn().mockResolvedValue(null), // No hay duplicado
      saveApplication: jest.fn().mockResolvedValue(true),
    };

    const service = new ApplicationService(fakeDb);
    const result = await service.submitApplication({ studentId: '321', projectId: 5 });

    expect(result).toBe(true);
    expect(fakeDb.getApplication).toHaveBeenCalledWith('321', 5);
    expect(fakeDb.saveApplication).toHaveBeenCalledTimes(1);
  });

  test('NO llama a saveApplication si ya aplicó', async () => {
    const fakeDb = {
      getApplication: jest.fn().mockResolvedValue({ studentId: '321', projectId: 5 }),
      saveApplication: jest.fn(),
    };

    const service = new ApplicationService(fakeDb);
    const result = await service.submitApplication({ studentId: '321', projectId: 5 });

    expect(result).toBe(false);
    expect(fakeDb.getApplication).toHaveBeenCalledWith('321', 5);
    expect(fakeDb.saveApplication).not.toHaveBeenCalled();
  });
});
