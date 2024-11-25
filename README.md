
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
nombre-del-proyecto/

├── cypress/
│   ├── downloads/                       # Carpeta para descargas (si alguna prueba lo requiere)
│   │
│   ├── e2e/                        # Contiene los archivos de pruebas E2E
│   │   ├── base/
│   │   │   └── BasePage.js         # Clase base con funciones reutilizables
│   │   │
│   │   ├── page/
│   │   │   ├── IngresoPage.js      # Page object para la página de ingreso
│   │   │   └── RegistroPage.js     # Page object para la página de registro
│   │   │
│   │   └── tests/
│   │       ├── Ingreso.cy.js       # Prueba de ingreso exitoso
│   │       ├── IngresoFail.cy.js   # Prueba de ingreso fallido
│   │       ├── Registro.cy.js      # Prueba de registro exitoso
│   │       └── RegistroFail.cy.js  # Prueba de registro fallido
│   │
│   ├── fixtures/                   # Datos de prueba estáticos (JSON, etc.)
│   │
│   ├── reports/                    # Reportes generados después de ejecutar las pruebas
│   │
│   ├── screenshots/                # Capturas de pantalla de las pruebas fallidas
│   │
│   └── support/                    # Funciones de soporte para Cypress
│
├── node_modules/                   # Dependencias instaladas (no se modifica manualmente)
│
├── cypress.config.js               # Configuración global de Cypress
│
├── package-lock.json               # Información exacta sobre las versiones de las dependencias
│
└── package.json                    # Configuración del proyecto y scripts de npm
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

