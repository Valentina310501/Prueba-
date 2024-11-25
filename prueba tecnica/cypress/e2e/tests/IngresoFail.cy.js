import IngresoPage from "../page/IngresoPage"
describe('Prueba - Ingreso del usuario registrado anteriormente y cerrar sesión de manera exitosa', () => {
    it('Ingresar con datos no registrados', () => {
        cy.log("Ingresar a la pantalla de ingreso")
        IngresoPage.llenarFormulario("Alfredo331@gmail.com","Alemania2023*")
        IngresoPage.clickIngreso()
        IngresoPage.clickDesplegable()
        IngresoPage.clickCerrarSesion()
})
})