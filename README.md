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

Para los mock test que se implementaron simulan la lógica de una base de datos, incluyendo métodos como hasDuplicateApplication, validateFields y saveApplication. Estos métodos permitieron simular distintos comportamientos posibles sin acceder a una base de datos real.

Se usaron spies mediante jest.fn() para espiar funciones como getApplication y saveApplication, con el fin de verificar que se llamaran (o no) en los momentos esperados dentro del flujo de aplicación.

## ¿Qué aprendieron al integrarlos?
Al integrar el Dummy, aprendimos que muchas veces no es necesario tener implementaciones completas de todas las dependencias para poder probar una clase o función. Los Dummies nos ayudaron a simplificar las pruebas y a centrarnos en el comportamiento de la clase principal, sin preocuparnos por detalles de otras clases. Además, entendimos mejor la importancia de aislar las pruebas para que sean más claras y fáciles de mantener.

Aprendimos que los mocks son herramientas útiles para probar la lógica de negocio de forma aislada, permitiéndonos simular distintos escenarios de validación de formularios y duplicados sin necesidad de un entorno real.

Aprendimos que los spies permiten verificar las interacciones entre funciones, lo cual es útil para asegurarnos de que no se estén ejecutando acciones innecesarias, como guardar una aplicación duplicada.



## ¿Qué problemas enfrentaron y cómo los resolvieron?
Uno de los principales retos fue identificar qué atributos mínimos debía tener el Dummy para que la clase ProyectoSolidario funcionara correctamente en la prueba. Al principio, olvidamos agregar algún atributo requerido y la prueba fallaba, pero revisando el código, ajustamos el Dummy para que cumpliera con lo necesario. 

Un problema fue que inicialmente olvidamos que las funciones simuladas debían devolver promesas (por ser asincrónicas). Esto causaba errores inesperados en las pruebas. Lo solucionamos usando correctamente jest.fn().mockResolvedValue() en las funciones necesarias.

El principal problema fue confundir el uso de spies con mocks. Al principio usábamos spies donde realmente necesitábamos simular comportamiento. Lo resolvimos diferenciando los casos de prueba: cuando necesitábamos solo observar llamadas usamos spies, y cuando queríamos simular lógica completa, usamos mocks.



## Tabla de resumen de aporte individual

## ✅ ¿Qué Test Doubles se implementaron?

| Encargado| Tipo     | Archivo                        | ¿Pasa pruebas? |
|----------|----------|--------------------------------|----------------|
| Miranda  |  Dummy   | `tests/dummy/dummy.test.js`    | ✅             |
| Sofia    | Stub     | `tests/stub/stub.test.js`      | ✅             |
| Kong     | Mock     | `tests/mock/mock.test.js`      | ✅             |
|Estefania | Fake     | `tests/fake/fake.test.js`      | ✅             |
| Kong     | Spy      | `tests/spy/spy.test.js`        | ✅             |

---

## Captura del resultado
![image](https://github.com/user-attachments/assets/eaa04bb1-837c-4b42-896e-594cc2d4c6b3)


