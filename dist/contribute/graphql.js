"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleGraphqlContribute = handleGraphqlContribute;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fs = _interopRequireDefault(require("fs"));

var _ora = _interopRequireDefault(require("ora"));

var _path = _interopRequireDefault(require("path"));

var _rimraf = _interopRequireDefault(require("rimraf"));

function handleGraphqlContribute(_x, _x2) {
  return _handleGraphqlContribute.apply(this, arguments);
}

function _handleGraphqlContribute() {
  _handleGraphqlContribute = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(dir, options) {
    var existDir;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            existDir = _fs.default.existsSync(dir);

            if (existDir) {
              _rimraf.default.sync(dir);
            }

            _fs.default.mkdirSync(dir);

            if (!(options.jsType === 'typescript')) {
              _context.next = 12;
              break;
            }

            if (!(options.framework === 'graphql-yoga')) {
              _context.next = 9;
              break;
            }

            _context.next = 7;
            return graphqlYogaTs(dir, options);

          case 7:
            _context.next = 10;
            break;

          case 9:
            if (options.framework === 'express') {// express
            } else if (options.framework === 'koa') {// koa
            }

          case 10:
            _context.next = 13;
            break;

          case 12:
            if (options.framework === 'graphql-yoga') {// graphql
            } else if (options.framework === 'express') {// express
            } else if (options.framework === 'koa') {// koa
            }

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _handleGraphqlContribute.apply(this, arguments);
}

function graphqlYogaTs(_x3, _x4) {
  return _graphqlYogaTs.apply(this, arguments);
}

function _graphqlYogaTs() {
  _graphqlYogaTs = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(dir, options) {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (options.features.includes('Webpack')) {
              _fs.default.copyFileSync(_path.default.resolve(__dirname, '../templates/src/package/ts-graphql-yoga-webpack/package.json'), _path.default.resolve(dir, './package.json'));
            }

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _graphqlYogaTs.apply(this, arguments);
}