'use strict';

class CustomElement {

  constructor(cssSelector) {
    this.cssSelector = cssSelector;
    // element(by.css(cssSelector));
  }

  getElement() {
    return this.cssSelector;
  }

}
module.exports = CustomElement;