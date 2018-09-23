"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.confirmCreate = confirmCreate;
exports.selectOptions = selectOptions;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _chalk = _interopRequireDefault(require("chalk"));

var _inquirer = _interopRequireDefault(require("inquirer"));

var _ora = _interopRequireDefault(require("ora"));

function confirmCreate(_x, _x2, _x3, _x4) {
  return _confirmCreate.apply(this, arguments);
}

function _confirmCreate() {
  _confirmCreate = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(inPlace, isExistDir, name, dir) {
    var answer;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _inquirer.default.prompt([{
              type: 'confirm',
              message: inPlace ? "Generate project in current directory?" : isExistDir ? "Target directory ".concat(dir, " exists. Continue?") : "Generate project in directory ".concat(dir, ". Continue?"),
              name: 'ok'
            }]);

          case 2:
            answer = _context.sent;
            return _context.abrupt("return", answer.ok);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _confirmCreate.apply(this, arguments);
}

function selectOptions() {
  return _selectOptions.apply(this, arguments);
}

function _selectOptions() {
  _selectOptions = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2() {
    var options, spinner;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _inquirer.default.prompt(typeOptions);

          case 2:
            options = _context2.sent;
            console.log(options);
            spinner = (0, _ora.default)('creating project...').start();
            _context2.next = 7;
            return new Promise(function (resolve) {
              setTimeout(function () {
                spinner.info('create project successfully');
                resolve();
              }, 5000);
            });

          case 7:
            spinner = (0, _ora.default)('npm install ...').start();
            _context2.next = 10;
            return new Promise(function (resolve) {
              setTimeout(function () {
                spinner.info('npm install successfully');
                resolve();
              }, 8000);
            });

          case 10:
            spinner = (0, _ora.default)('check health ...').start();
            _context2.next = 13;
            return new Promise(function (resolve) {
              setTimeout(function () {
                spinner.succeed('Enjoy your time, Bye bye.');
                resolve();
              }, 2000);
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _selectOptions.apply(this, arguments);
}

var typeOptions = [{
  type: 'list',
  name: 'apiType',
  message: 'Which api service do you need?',
  choices: ['REST', 'GraphQL'],
  filter: function filter(val) {
    return val.toLowerCase();
  }
}, {
  type: 'list',
  name: 'jsType',
  message: 'What type language would you like?',
  choices: ['Javascript', 'Typescript'],
  filter: function filter(val) {
    return val.toLowerCase();
  }
}, {
  type: 'list',
  name: 'framework',
  message: 'Which Web Framework would you like?',
  choices: ['Express', 'Koa', 'Egg(coming soon)', 'Nest(coming soon)', 'Graphql-yoga'],
  filter: function filter(val) {
    return val.toLowerCase();
  }
}, {
  type: 'checkbox',
  message: 'Check features needed for your project',
  name: 'features',
  choices: [{
    name: 'Webpack',
    checked: true
  }, {
    name: 'Babel'
  }, {
    name: 'Linter / Formatter',
    checked: true
  }, {
    name: 'Unit Testing'
  }, {
    name: 'Docker Compose'
  }],
  validate: function validate(answer) {
    return true;
  }
}, {
  type: 'list',
  name: 'db',
  message: 'Which DB client would you use?',
  choices: ['Mongodb', 'Mysql', 'Postgres'],
  filter: function filter(val) {
    return val.toLowerCase();
  }
}, {
  type: 'list',
  name: 'cache',
  message: 'Would you like a cache middleware?',
  choices: ['Redis', 'Memcached(coming soon)'],
  filter: function filter(val) {
    return val.toLowerCase();
  }
}];