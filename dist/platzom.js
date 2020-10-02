"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Platzon;

function Platzon(str) {
  var translation = str; // si la palabra es un palindromo ninguna regla anteriror cuneta y se devuelve la palabra intercalando mayusculas y minusculas

  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };

  function MinMay(str) {
    var length = str.length;
    var translation = '';
    var capitalize = true;

    for (var i = 0; i < length; i++) {
      var _char = str.charAt(i);

      translation += capitalize ? _char.toUpperCase() : _char.toLowerCase();
      capitalize = !capitalize;
    }

    return translation;
  }

  if (str == reverse(str)) {
    return MinMay(str);
  } // si la palabra termina en ar, se le quitan los 2 ultimos caracteres


  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2);
  } // si la palabra inicia con Z adicionar "pe" al final


  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe';
  } // si la palbra tiene mas de 10 caracteres  se debe partir a la mitad y unir con un -


  var length = translation.length;

  if (length >= 10) {
    var firstHalf = translation.slice(0, Math.round(length / 2));
    var secondtHalf = translation.slice(Math.round(length / 2));
    translation = "".concat(firstHalf, "-").concat(secondtHalf);
  }

  return translation;
}