// Clase real que depende de otra clase (Organizacion)
class Organizacion {
  constructor(id, nombre) {
    this.id = id;
    this.nombre = nombre;
  }
}

// Clase ProyectoSolidario depende de Organizacion
class ProyectoSolidario {
  constructor({ id, nombre, organizacion, horas, cupos, responsable, ods }) {
    this.id = id;
    this.nombre = nombre;
    this.organizacion = organizacion; // Dependencia
    this.horas = horas;
    this.cupos = cupos;
    this.responsable = responsable;
    this.ods = ods;
  }

  descripcionCorta() {
    return `${this.nombre} (${this.organizacion.nombre}) - ${this.horas}h, ${this.cupos} cupos`;
  }
}

// Exportamos para pruebas
module.exports = { Organizacion, ProyectoSolidario };