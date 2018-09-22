"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = run;

var _path = _interopRequireDefault(require("path"));

var _options = require("./options");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var log = console.log;

function run(_x) {
  return _run.apply(this, arguments);
}

function _run() {
  _run = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(rawName) {
    var inPlace, name, toDirName;
    return regeneratorRuntime.wrap(function _callee$(_context) {
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