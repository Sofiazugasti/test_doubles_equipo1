# Test Doubles - Equipo 1

## 🧠 Integrantes:
- Estefanía Antonio Villaseca  
- Sofia Zugasti Delgado
- Alejandro Kong Montoya
- Miranda Eugenia Colorado Arróniz


---

## 📋 Resumen

Implementamos los cinco tipos de Test Doubles utilizando Jest: **Dummy, Stub, Mock, Fake y Spy**, aplicando ejemplos reales y personalizados a partir de nuestro proyecto.


---

## ¿Qué Test Doubles se implementaron?
En el proyecto implementamos los cinco tipos de Test Doubles: Dummy, Stub, Mock, Fake y Spy. Para el caso del Dummy, creamos una clase sencilla que solo cumple con la interfaz mínima requerida por el sistema, sin agregar lógica adicional. En específico, usamos un Dummy para simular una organización al crear un proyecto solidario, permitiendo así enfocar la prueba únicamente en la lógica del proyecto.


## ¿Qué aprendieron al integrarlos?
Al integrar el Dummy, aprendimos que muchas veces no es necesario tener implementaciones completas de todas las dependencias para poder probar una clase o función. Los Dummies nos ayudaron a simplificar las pruebas y a centrarnos en el comportamiento de la clase principal, sin preocuparnos por detalles de otras clases. Además, entendimos mejor la importancia de aislar las pruebas para que sean más claras y fáciles de mantener.



## ¿Qué problemas enfrentaron y cómo los resolvieron?
Uno de los principales retos fue identificar qué atributos mínimos debía tener el Dummy para que la clase ProyectoSolidario funcionara correctamente en la prueba. Al principio, olvidamos agregar algún atributo requerido y la prueba fallaba, pero revisando el código, ajustamos el Dummy para que cumpliera con lo necesario. 



## Tabla de resumen de aporte individual

## ✅ ¿Qué Test Doubles se implementaron?

| Tipo     | Archivo                        | ¿Pasa pruebas? |
|----------|--------------------------------|----------------|
| Dummy    | `tests/dummy/dummy.test.js`    | ✅             |
| Stub     | `tests/stub/stub.test.js`      | ✅             |
| Mock     | `tests/mock/mock.test.js`      | ✅             |
| Fake     | `tests/fake/fake.test.js`      | ✅             |
| Spy      | `tests/spy/spy.test.js`        | ✅             |

---

## Captura del resultado del 'jest --coverage'

