"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = run;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _path = _interopRequireDefault(require("path"));

var _options = require("./options");

var log = console.log;

function run(_x) {
  return _run.apply(this, arguments);
}

function _run() {
  _run = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(rawName) {
    var inPlace, name, toDirName;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            inPlace = !rawName || rawName === '.';
            name = inPlace ? _path.default.relative('../', process.cwd()) : rawName;
            toDirName = _path.default.resolve(rawName || '.');
            _context.next = 6;
            return (0, _options.confirmCreate)(inPlace, name, toDirName);

          case 6:
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);
            process.exit(0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 8]]);
  }));
  return _run.apply(this, arguments);
}