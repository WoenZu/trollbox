'use strict';

var tb = {};
tb.init = function() {
  tb.App = new App();
  tb.AppUI = AppUI;
  tb.App.start();
};

$(window).on('load', tb.init);
