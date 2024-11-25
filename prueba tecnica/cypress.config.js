const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://test-qa.inlaze.com', 
    setupNodeEvents(on, config) {
    },specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // Ruta de los casos de prueba
    reporter: "mochawesome", // Configura Mochawesome como el reporter
    reporterOptions: {
      reportDir: "cypress/reports", // Carpeta donde se guardarán los reportes
      overwrite: false,
      html: true,
      json: true,
    },
  }
});