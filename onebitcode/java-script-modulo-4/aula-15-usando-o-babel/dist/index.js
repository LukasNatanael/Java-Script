"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/*
    O módulo `babel` serve para adaptar seu código para versões mais antigas do JS, em navegadores desatualizados
    -D é equivalente a --save-dev
*/

console.clear();
var Calculate = /*#__PURE__*/function () {
  function Calculate() {
    _classCallCheck(this, Calculate);
  }
  return _createClass(Calculate, [{
    key: "average",
    value: function average() {
      for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
        numbers[_key] = arguments[_key];
      }
      var sum = numbers.reduce(function (accumulate, number) {
        return accumulate + number;
      }, 0);
      return sum / numbers.length;
    }
  }, {
    key: "weightedAverage",
    value: function weightedAverage() {
      for (var _len2 = arguments.length, entries = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        entries[_key2] = arguments[_key2];
      }
      var sum = entries.reduce(function (accumulate, _ref) {
        var number = _ref.number,
          weigth = _ref.weigth;
        return accumulate + number * (weigth !== null && weigth !== void 0 ? weigth : 1);
      }, 0);
      var weigthSum = entries.reduce(function (accumulate, entry) {
        var _entry$weigth;
        return accumulate + ((_entry$weigth = entry.weigth) !== null && _entry$weigth !== void 0 ? _entry$weigth : 1);
      }, 0);
      return sum / weigthSum;
    }
  }, {
    key: "median",
    value: function median() {
      for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        numbers[_key3] = arguments[_key3];
      }
      var orderedNumbers = [].concat(numbers).sort(function (a, b) {
        return a - b;
      });
      var middle = parseInt(orderedNumbers.length / 2);
      if (orderedNumbers.length % 2 === 0) {
        middle = this.average(orderedNumbers[middle - 1], orderedNumbers[middle]);
        return middle;
      } else {
        middle = parseInt(orderedNumbers.length / 2);
        return orderedNumbers[middle];
      }
    }
  }, {
    key: "mode",
    value: function mode() {
      for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        numbers[_key4] = arguments[_key4];
      }
      // [ [num, qtd], [num, qtd], [num, qtd] ]
      var quantities = numbers.map(function (num) {
        return [num, numbers.filter(function (n) {
          return n === num;
        }).length];
      });
      quantities.sort(function (a, b) {
        return b[1] - a[1];
      });
      return quantities[0][0];
    }
  }]);
}();
var Calcular = new Calculate();
var media = Calcular.average(5, 10);
var mediaPonderada = Calcular.weightedAverage({
  number: 9,
  weigth: 3
}, {
  number: 7
}, {
  number: 10,
  weigth: 1
});
var moda = Calcular.mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4);
var mediana = Calcular.median(15, 14, 8, 7, 3);
var medianaDuble = Calcular.median(2, 4, 5, 7, 42, 99);
console.log("\nM\xE9dia: ".concat(media));
console.log("M\xE9dia Ponderada: ".concat(mediaPonderada));
console.log("Moda: ".concat(moda));
console.log("Mediana: ".concat(mediana));
console.log("Mediana dupla: ".concat(medianaDuble, "\n"));