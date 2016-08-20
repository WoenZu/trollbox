'use strict';

function AppUI() {
  console.log('appUI init...');
  var inputLine = $('.inputLine');

  this.test = function() {
    console.log('appUI test');
  };

  this.init = function() {
    console.log('event listeners init...');
    //event listeners
    $('.inputLine').on('keyup', function(event) {
      event.preventDefault();
      if (event.which === 13) {
        var string = this.getInputContent();
        if (string !== '') {
           note('keyup listener', 'WARNING!');//посылаем строку
        }
      }
    });

    $('body').on('click', function() {
      console.log(AppUI.init);
      //this.setFocus(inputLine);
    });
  };

  this.getInputContent = function() {
    var msg = $(inputLine).val();
    $(inputLine).val('');
    console.log(string);
    return string;
  };

  this.setFocus = function(element) {
    $(element).fucus();
  };

  this.note = function(text, type) {
    var msg = $('<div>');
    msg.addClass('msg');
    msg.text(type + ' ' + text);
    $('.mainLog').append(msg);
  };
}
