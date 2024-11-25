import BasePage from '../base/BasePage'
class IngresoBase extends BasePage {
    xpath_link_ingreso = "//input[@name='Sign in']";
    css_input_usuario = "#email";
    css_input_password = "#password";
    xpath_button_ingresar = "//button[normalize-space(text())='Sign in']";
    xpath_button_desplegable = "//img[@alt='Rengoku']";
    xpath_button_cerrar = "//a[normalize-space(text())='Logout']";
    llenarFormulario(usuario, password) {
        this.typeTextByCss(this.css_input_usuario, usuario);
        this.typeTextByCss(this.css_input_password, password);
    }
    clickIngreso() {
        this.clickElementByXpath(this.xpath_button_ingresar);
    }
    clickDesplegable(){
        this.clickElementByXpath(this.xpath_button_desplegable)
    }
    clickCerrarSesion(){
        this.clickElementByXpath(this.xpath_button_cerrar)
        }
} export default new IngresoBase();