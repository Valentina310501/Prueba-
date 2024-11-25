
# :floppy_disk:  En este proyecto se verán las pruebas automatizadas desarrolladas con cypress 
## :clipboard: Descripción: 
Veremos como se realizan las pruebas automatizadas (E2E)  para la página `web https://test-qa.inlaze.com/auth/sign-in` de inicio de sesión y creación de usuario. Se utilizan selectores XPath para localizar elementos complejos y validar diferentes flujos de la aplicación.
## :pushpin: Lenguajes y/o herramientas utilizadas
**Cypress:** Framework de pruebas E2E.
- **JavaScript:** Lenguaje de programación principal.
- **XPath:** Para la selección avanzada de elementos.
- **Visual Studio Code:** Entorno de desarrollo.
## :bookmark: Requisitos para la ejecución y validación de la automatización 
Confirmar la instalación de 
- **Node.js** (v14 o superior)
- **npm** (v6 o superior):
- **Visual Studio Code**:
- **Cypress**
- ## :black_nib: Instalación
- Se debe realizar la respetiva clonación del proyecto 
`https://github.com/Valentina310501/Prueba-.git`
Al tener ya clonado el proyecto, para ejecutar el proyecto se debe ingresar el siguiente comando `(npx cypress open)`
## :open_file_folder: Estructura del proyecto 
📂 cypress
├── 📂 downloads
├── 📂 e2e
│   ├── 📂 base
│   │   └── BasePage.js
│   ├── 📂 page
│   │   ├── IngresoPage.js
│   │   └── RegistroPage.js
│   └── 📂 tests
│       ├── Ingreso.cy.js
│       ├── IngresoFail.cy.js
│       ├── Registro.cy.js
│       └── RegistroFail.cy.js
├── 📂 fixtures
├── 📂 reports
├── 📂 screenshots
├── 📂 support
├── 📂 node_modules
├── cypress.config.js
├── package-lock.json
└── package.json
## :paperclip: Explicación de cada carpeta:

- e2e/base/:
Contiene BasePage.js, una clase base con métodos comunes utilizados en diferentes páginas (por ejemplo, navegación, clics, y waits).

- e2e/page/:
Contiene objetos de página (Page Objects). Cada archivo representa una página de la aplicación web y encapsula la lógica de interacción con esa página (IngresoPage.js, RegistroPage.js).

- e2e/tests/:
Contiene las pruebas (.cy.js) que validan el comportamiento de la aplicación. Por ejemplo:

- Ingreso.cy.js: Prueba para un ingreso exitoso.
- IngresoFail.cy.js: Prueba para validar el fallo en ingreso.
- Registro.cy.js: Prueba para un registro exitoso.
- RegistroFail.cy.js: Prueba para validar el fallo en registro.
- fixtures/:
Almacena datos estáticos o de prueba en formato JSON, útiles para alimentar las pruebas sin codificar valores directamente.

- reports/:
Contiene los reportes de pruebas generados automáticamente (por ejemplo, con Mochawesome o Allure).

- screenshots/:
Capturas automáticas de pantalla cuando una prueba falla, útil para depuración.

- support/:
Carpeta con comandos personalizados o configuraciones de Cypress.

- cypress.config.js:
Archivo de configuración principal de Cypress. Aquí defines rutas, timeouts, plugins, etc.

