'use strict';

function App() {
    console.log('app init...');

    this.start = function() {
      tb.AppUI.init();
      tb.AppUI.test();
    };
}
