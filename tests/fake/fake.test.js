// Importamos la clase real que vamos a probar
const { ProjectService } = require('../../doubles/fake/fake');

// Creamos un Fake de base de datos que simula los datos de proyectos
class FakeProjectDatabase {
  constructor() {
    // Este array simula los datos reales que estarían en una base de datos o Supabase
    this.projects = [
      { id: 1, nombre: "Educación para todos", cupos: 0 },  // Proyecto sin cupo
      { id: 2, nombre: "Reforesta tu comunidad", cupos: 3 }, // Proyecto con cupo
    ];
  }

  // Simulamos una consulta a base de datos
  async getProjectById(id) {
    // Retorna el proyecto que coincida con el ID recibido
    return this.projects.find(p => p.id === id);
  }
}

// Test para verificar que la lógica rechaza postulaciones cuando no hay cupo
test("rechaza postulación si no hay cupo", async () => {
  const fakeDb = new FakeProjectDatabase(); // Fake como dependencia
  const service = new ProjectService(fakeDb); // Inyectamos el Fake a la clase real

  const available = await service.hasAvailableSlots(1); // Proyecto con 0 cupos
  expect(available).toBe(false); // Esperamos que NO haya cupo
});

// Test para verificar que la lógica acepta postulaciones cuando sí hay cupo
test("acepta postulación si hay cupo", async () => {
  const fakeDb = new FakeProjectDatabase(); // Fake como dependencia
  const service = new ProjectService(fakeDb); // Inyectamos el Fake a la clase real

  const available = await service.hasAvailableSlots(2); // Proyecto con 3 cupos
  expect(available).toBe(true); // Esperamos que SÍ haya cupo
});
