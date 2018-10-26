"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.installPackage = installPackage;

var _child_process = require("child_process");

var _ora = _interopRequireDefault(require("ora"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function installPackage(_x) {
  return _installPackage.apply(this, arguments);
}

function _installPackage() {
  _installPackage = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(dir) {
    var spinner;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            spinner = (0, _ora.default)('npm install ...').start();
            _context.next = 3;
            return new Promise(function (resolve, reject) {
              (0, _child_process.exec)("cd ".concat(dir, " && npm install"), {
                encoding: 'utf8'
              }, function (err, stdout, stderr) {
                if (err) {
                  spinner = spinner.fail("npm error: ".concat(err));
                  reject(err);
                }

                spinner = spinner.info(stdout);
                spinner = spinner.info(stderr);
                resolve(spinner);
              });
            });

          case 3:
            spinner = _context.sent;
            spinner.succeed('npm install successfully!');

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _installPackage.apply(this, arguments);
}