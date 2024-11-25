import RegristroPage from "../page/RegristroPage"
describe('Prueba - Registro de usuario nuevo', () => {
    it('Registrarse de manera fallida', () => {
        cy.log("Dirige a la pantalla de Registro de usuario")
        RegristroPage.clickRegistro()
        RegristroPage.llenarFormulario("Valentina", "V@gmail.com","Alemania2023")
        RegristroPage.clickRegistroUsuario()
        RegristroPage.verifyTextAlertMsg("Successful registration")
    
    })
})
