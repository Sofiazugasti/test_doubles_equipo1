// tests/stub/stub.test.js
const { ProjectService } = require('../../doubles/stub/stub');

describe('ProjectService.addProject', () => {
  let fakeDb;
  let service;

  beforeEach(() => {
    fakeDb = {
      getProjectByName: jest.fn(),
      insertProject: jest.fn(),
    };
    service = new ProjectService(fakeDb);
  });

  test('no agrega si el proyecto ya existe', async () => {
    fakeDb.getProjectByName.mockResolvedValue({ id: 99, nombre: 'Duplicado', cupos: 5 });
    const result = await service.addProject({ id: 3, nombre: 'Duplicado', cupos: 10 });
    expect(result).toBe(false);
    expect(fakeDb.insertProject).not.toHaveBeenCalled();
  });

  test('agrega correctamente si no existe', async () => {
    fakeDb.getProjectByName.mockResolvedValue(null);
    fakeDb.insertProject.mockResolvedValue();
    const newProj = { id: 4, nombre: 'Nuevo Proyecto', cupos: 8 };
    const result = await service.addProject(newProj);
    expect(result).toBe(true);
    expect(fakeDb.insertProject).toHaveBeenCalledWith(newProj);
  });
});
