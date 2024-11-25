import BasePage from '../base/BasePage'
class RegistroBase extends BasePage {
    xpath_link_registro = "//a[normalize-space(text())='Sign up']"
    css_input_nombre_completo = "#full-name"
    css_input_correo_electronico = "#email"
    css_input_password = "input#password"
    css_input_password_confirm = "input#confirm-password"
    xpath_button_registrarse = "//button[normalize-space(text())='Sign up']"
    xpath_alert_msg = "//*[@role='alert']/div[2]"
    clickRegistro() {
        this.clickElementByXpath(this.xpath_link_registro)
    }
    llenarFormulario(nombre_completo,correo_electronico,password){
        this.typeTextByCss(this.css_input_nombre_completo, nombre_completo)
        this.typeTextByCss(this.css_input_correo_electronico, correo_electronico)
        this.typeTextByCss(this.css_input_password, password)
        this.typeTextByCss(this.css_input_password_confirm, password)

    }
    clickRegistroUsuario(){
        this.wait(2)
        this.getElementByXpath(this.xpath_button_registrarse).should('not.be.disabled')
        this.clickElementByXpath(this.xpath_button_registrarse)
    }
    verifyTextAlertMsg(texto){
        this.wait (2)
        this.getElementByXpath(this.xpath_alert_msg).should('contain.text',texto)
    }
}

export default new RegistroBase()