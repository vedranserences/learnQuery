var domSelector = function (selectors) {
  'use strict';

  var elements = [];
  var regExp = new RegExp('[a-z]');

  if (selectors.charAt(0) === '#') {
    var idElement = document.getElementById(selectors.slice(1));
    if (idElement) {
      elements.push(idElement);
    }
    return elements;
  } else if (selectors.charAt(0) === '.') {
    console.log(selectors.slice(1));
    var classElements = document.getElementsByClassName(selectors.slice(1));
    console.log(classElements.length);
    if (classElements.length > 0) {
      for (var i = 0; i < classElements.length; i++) {
        console.log(classElements[i]);
        elements.push(classElements[i]);
      }
    }
    return elements;
  } else {
    if (regExp.test(selectors)) {
      console.log(regExp.test(selectors));
      var tagElement = document.getElementsByTagName(selectors);
      if (tagElement.length > 0) {
        for (var j = 0; j < tagElement.length; j++) {
          console.log(tagElement[j]);
          elements.push(tagElement[j]);
        }
      }
      return elements;
    } else {
      throw new Error('Invalid selector');
    }
  }
};