"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = run;

var _fs = _interopRequireDefault(require("fs"));

var _ora = _interopRequireDefault(require("ora"));

var _path = _interopRequireDefault(require("path"));

var _options = require("./options");

var _main = require("./contribute/main");

var _npm = require("./contribute/npm");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function run(_x) {
  return _run.apply(this, arguments);
}

function _run() {
  _run = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(rawName) {
    var inPlace, name, toDirName, isExistDir, confirmContinue, options, spinner;
    return regeneratorRuntime.wrap(function _callee$(_context) {
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
            _context.next = 16;
            return (0, _main.contribute)(toDirName, options);

          case 16:
            _context.next = 18;
            return (0, _npm.installPackage)(toDirName);

          case 18:
            spinner = (0, _ora.default)('check health ...').start();
            _context.next = 21;
            return new Promise(function (resolve) {
              setTimeout(function () {
                spinner.succeed('Enjoy your time, Bye bye.');
                resolve();
              }, 2000);
            });

          case 21:
            _context.next = 27;
            break;

          case 23:
            _context.prev = 23;
            _context.t0 = _context["catch"](0);

            if (_context.t0.message !== 'exist') {
              console.error(_context.t0);
            }

            process.exit(0);

          case 27:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 23]]);
  }));
  return _run.apply(this, arguments);
}