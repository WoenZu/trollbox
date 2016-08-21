'use strict';

var AppUI = {};

  AppUI.inputLine = $('.inputLine');
  AppUI.mainLog = $('.mainLog');

  AppUI.test = function() {
    console.log('appUI test');
  };

  AppUI.init = function() {
    $('.inputLine').on('keyup', function(event) {
      event.preventDefault();
      if (event.which === 13) {
        var string = AppUI.getInputContent();
        if (string !== '') {
           AppUI.note('keyup listener', 'WARNING!');//посылаем строку
        }
      }
    });

    $('body').on('click', function() {
      AppUI.setFocus(AppUI.inputLine);
    });

    AppUI.setFocus(AppUI.inputLine);
  };

  AppUI.getInputContent = function() {
    var string = $(AppUI.inputLine).val();
    $(AppUI.inputLine).val('');
    return string;
  };

  AppUI.setFocus = function(element) {
    $(element).focus();
  };

  AppUI.note = function(text, type) {
    console.log('note func');
    var msg = $('<div>');
    msg.addClass('msg');
    msg.text(type + ' ' + text);
    AppUI.mainLog.append(msg);
  };
