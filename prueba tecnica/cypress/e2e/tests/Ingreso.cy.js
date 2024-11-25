import IngresoPage from "../page/IngresoPage"
describe('Prueba - Ingreso del usuario registrado anteriormente y cerrar sesión de manera exitosa', () => {
    it('Ingresar con los datos previamente registrados y de manera exitosa', () => {
        cy.log("Ingresar a la pantalla de ingreso")
        IngresoPage.llenarFormulario("Valentina31@gmail.com","Alemania2023*")
        IngresoPage.clickIngreso()
        IngresoPage.clickDesplegable()
        IngresoPage.clickCerrarSesion()
})
})