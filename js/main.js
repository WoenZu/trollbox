'use strict';

var tb = {};
tb.init = function() {
  console.log('tb.init...');
  tb.App = new App();
  tb.AppUI = new AppUI();
  tb.App.start();
};

$(window).on('load', tb.init);
