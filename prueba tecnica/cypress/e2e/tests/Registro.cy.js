import RegristroPage from "../page/RegristroPage"
describe('Prueba - Registro de usuario nuevo', () => {
    it('Registrarse de manera exitosa', () => {
        cy.log("Dirige a la pantalla de Registro de usuario")
        RegristroPage.clickRegistro()
        RegristroPage.llenarFormulario("Valentina Bernal", "Valentina31@gmail.com","Alemania2023*")
        RegristroPage.clickRegistroUsuario()
        RegristroPage.verifyTextAlertMsg("Successful registration")
    
    })
})
