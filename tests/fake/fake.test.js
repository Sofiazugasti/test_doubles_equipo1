const { ProjectService } = require('../../doubles/fake/fake');

class FakeProjectDatabase {
  constructor() {
    this.projects = [
      { id: 1, nombre: "Educación para todos", cupos: 0 },
      { id: 2, nombre: "Reforesta tu comunidad", cupos: 3 },
    ];
  }

  async getProjectById(id) {
    return this.projects.find(p => p.id === id);
  }
}

test("rechaza postulación si no hay cupo", async () => {
  const fakeDb = new FakeProjectDatabase();
  const service = new ProjectService(fakeDb);

  const available = await service.hasAvailableSlots(1);
  expect(available).toBe(false);
});

test("acepta postulación si hay cupo", async () => {
  const fakeDb = new FakeProjectDatabase();
  const service = new ProjectService(fakeDb);

  const available = await service.hasAvailableSlots(2);
  expect(available).toBe(true);
});
