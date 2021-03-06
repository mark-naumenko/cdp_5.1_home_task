'use strict';

const CustomElement = require('./customElement.js'),
  ElementHelper = require('./elementHelper');

const elementHelper = new ElementHelper();

class Button extends CustomElement {

  constructor(cssSelector) {
    super(cssSelector);
  }

  scrollAndWaitAndClick(top = 0, timeOut = 5000) {
    const timeOutMs = timeOut || browser.params.defaultTimeOut;
    return elementHelper.waitForVisibilityOf(this.getElement(), 5000).then(() => {
      return this.getElement().getLocation().then((navDivLocation2) => {
        let currTop = navDivLocation2.y;
        const currLeft = navDivLocation2.x;
        currTop -= top || 400;
        return browser.executeScript(`window.scrollTo(${currLeft}, ${currTop});`);
      });
    }).then(() => {
      return browser.wait(protractor.ExpectedConditions.elementToBeClickable(this.getElement()), timeOutMs,
        `Waiting for element to be clickable of ${this.getElement().locator()} failed`);
    }).then(() => {
      return this.getElement().click();
    });
  }
}

module.exports = Button;