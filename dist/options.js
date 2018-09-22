"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.confirmCreate = confirmCreate;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _chalk = _interopRequireDefault(require("chalk"));

var _inquirer = _interopRequireDefault(require("inquirer"));

function confirmCreate(_x, _x2, _x3) {
  return _confirmCreate.apply(this, arguments);
}

function _confirmCreate() {
  _confirmCreate = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(inPlace, name, dir) {
    var answers;
    return _regenerator.default.wrap(function _callee$(_context) {
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