"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.confirmCreate = confirmCreate;

var _chalk = _interopRequireDefault(require("chalk"));

var _inquirer = _interopRequireDefault(require("inquirer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function confirmCreate(_x, _x2, _x3) {
  return _confirmCreate.apply(this, arguments);
}

function _confirmCreate() {
  _confirmCreate = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(inPlace, name, dir) {
    var answers;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _inquirer.default.prompt([{
              type: 'confirm',
              message: inPlace ? "Generate project in current directory?" : 'Target directory exists. Continue?',
              name: 'ok'
            }]);

          case 2:
            answers = _context.sent;
            console.log(answers);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _confirmCreate.apply(this, arguments);
}