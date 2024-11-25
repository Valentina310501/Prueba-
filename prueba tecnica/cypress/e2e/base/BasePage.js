export default class BasePage {
    /**
     * abrir url
     */
    navigate(url) {
        cy.visit(url)
    }

    /** 
     * Encontrar elemento por css selector 
    */
    getElementByCss(selector) {
        return cy.get(selector)
    }
    /**
     * Encontrar elemento por by xpath
     */
    getElementByXpath(xpath) {
        return cy.xpath(xpath)
    }

    /**
     * click al elemento por css selector
    */
    clickElementByCss(selector) {
        this.getElementByCss(selector).click()
    }
    /**
     * click al elemento por xpath
     */
    clickElementByXpath(xpath) {
        this.getElementByXpath(xpath).click()
    }

    /**
    *ingresar texto al elemento por css selector
    */
    typeTextByCss(selector, text) {
        this.getElementByCss(selector).type(text)
    }
    /**
     * ingresar texto al elemento por xpath
    */
    typeTextByXpath(xpath, text) {
        this.getElementByXpath(xpath).type(text)
    }

    // SELECCIONAR OPCIONES

    /**
     * seleccionar opcion por texto visible por css selector
     */
    
//Obtener texto de un elemento por css selector */
      getTextByCss(selector) {
          return cy.get(selector).invoke('text');}
     
         
    //Obtener texto de un elemento por xpath*/
      getTextByXPath(xpath) {
          return cy.xpath(xpath).invoke('text');}
    
    selectByVisibleTextByCss(selector, visibleText) {
        this.getElementByCss(selector).select(visibleText);
    }
    /**
    * seleccionar opcion por texto visible por xpath
    */
    selectByVisibleTextByXpath(xpath, visibleText) {
        this.getElementByXpath(xpath).select(visibleText);
    }

    /**
     * seleccionar opcion por texto por css selector
     */
    selectByValueByCss(selector, value) {
        this.getElementByCss(selector).select(value);
    }

    /**
    * seleccionar opcion por texto por xpath
    */
    selectByValueByXpath(xpath, value) {
        this.getElementByXpath(xpath).select(value);
    }

    /**
     * seleccionar opcion por indice por css selector
     */
    selectByIndexByCss(selector, index) {
        this.getElementByCss(selector).then($select => {
            const options = $select.find('option');
            if (index < options.length) {
                cy.wrap($select).select(options[index].value);
            } else {
                throw new Error(`Índice ${index} fuera del rango de opciones disponibles.`);
            }
        });
    }

    /**
     * seleccionar opcion por indice por xpath
     */
    selectByIndexByXpath(xpath, index) {
        this.getElementByXpath(xpath).then($select => {
            const options = $select.find('option');
            if (index < options.length) {
                cy.wrap($select).select(options[index].value);
            } else {
                throw new Error(`Índice ${index} fuera del rango de opciones disponibles.`);
            }
        });
    }
    //tiempos de espera explicita 
    wait(secods){
        cy.wait(secods * 1000)
    }
}