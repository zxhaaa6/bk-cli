"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.confirmCreate = confirmCreate;
exports.selectOptions = selectOptions;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _inquirer = _interopRequireDefault(require("inquirer"));

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
    var options;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _inquirer.default.prompt(typeOptions);

          case 2:
            options = _context2.sent;
            return _context2.abrupt("return", options);

          case 4:
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
  choices: ['None', 'Mongodb', 'Mysql', 'Postgres(coming soon)'],
  filter: function filter(val) {
    return val.toLowerCase();
  }
}, {
  type: 'list',
  name: 'cache',
  message: 'Would you like a cache middleware?',
  choices: ['None', 'Redis', 'Memcached(coming soon)'],
  filter: function filter(val) {
    return val.toLowerCase();
  }
}];