// Ejemplo de Test Double Dummy en Jest para ProyectoSolidario
const { ProyectoSolidario } = require('../../doubles/dummy/dummy');

// Dummy: solo cumple la interfaz mínima, no tiene lógica real
class OrganizacionDummy {
  constructor() {
    this.id = 'dummy-id';
    this.nombre = 'Dummy ONG';
  }
}

describe('ProyectoSolidario con Dummy', () => {
  it('debe crear un proyecto usando un Dummy para la organización', () => {
    // Creamos el Dummy
    const dummyOrganizacion = new OrganizacionDummy();
    // Creamos el proyecto usando el Dummy
    const proyecto = new ProyectoSolidario({
      id: 'p1',
      nombre: 'Reforestación Urbana',
      organizacion: dummyOrganizacion, // Aquí usamos el Dummy
      horas: 20,
      cupos: 10,
      responsable: 'María López',
      ods: '13 - Acción por el clima'
    });
    // Verificamos que el Dummy se use correctamente
    expect(proyecto.organizacion.nombre).toBe('Dummy ONG');
    expect(proyecto.descripcionCorta()).toContain('Dummy ONG');
  });
});
