"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = run;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fs = _interopRequireDefault(require("fs"));

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
    var inPlace, name, toDirName, isExistDir, confirmContinue, options;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            inPlace = !rawName || rawName === '.';
            name = inPlace ? _path.default.relative('../', process.cwd()) : rawName;
            name = name.replace(/\.\.\/|\.\//g, '');
            toDirName = _path.default.resolve(rawName || '.');
            isExistDir = _fs.default.existsSync(toDirName);
            _context.next = 8;
            return (0, _options.confirmCreate)(inPlace, isExistDir, name, toDirName);

          case 8:
            confirmContinue = _context.sent;

            if (confirmContinue) {
              _context.next = 11;
              break;
            }

            throw new Error('exist');

          case 11:
            _context.next = 13;
            return (0, _options.selectOptions)();

          case 13:
            options = _context.sent;
            _context.next = 20;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);

            if (_context.t0.message !== 'exist') {
              console.error(_context.t0);
            }

            process.exit(0);

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 16]]);
  }));
  return _run.apply(this, arguments);
}