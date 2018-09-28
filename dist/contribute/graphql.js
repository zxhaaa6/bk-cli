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

var _common = require("./common");

var _ncp = _interopRequireDefault(require("../util/ncp"));

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

            _context.next = 5;
            return (0, _common.handleCommonDirAndFiles)(dir, options);

          case 5:
            if (!(options.jsType === 'typescript')) {
              _context.next = 14;
              break;
            }

            if (!(options.framework === 'graphql-yoga')) {
              _context.next = 11;
              break;
            }

            _context.next = 9;
            return graphqlYogaTs(dir, options);

          case 9:
            _context.next = 12;
            break;

          case 11:
            if (options.framework === 'express') {// express
            } else if (options.framework === 'koa') {// koa
            }

          case 12:
            _context.next = 15;
            break;

          case 14:
            if (options.framework === 'graphql-yoga') {// graphql
            } else if (options.framework === 'express') {// express
            } else if (options.framework === 'koa') {// koa
            }

          case 15:
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
    var SRC_DIR, MIDDLEWARE_PATH, MODULE_PATH;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            SRC_DIR = _path.default.resolve(dir, './src');
            MIDDLEWARE_PATH = _path.default.resolve(dir, './src/middleware');
            MODULE_PATH = _path.default.resolve(dir, './src/module');

            _fs.default.copyFileSync(_path.default.resolve(__dirname, '../templates/src/package/ts-graphql-yoga-webpack/package.json'), _path.default.resolve(dir, './package.json'));

            _fs.default.copyFileSync(_path.default.resolve(__dirname, '../templates/src/config/ts-graphql-yoga/config.ts'), _path.default.resolve(SRC_DIR, './config/config.ts'));

            _context2.next = 7;
            return (0, _ncp.default)(_path.default.resolve(__dirname, '../templates/src/app/ts-graphql/yoga/'), _path.default.resolve(SRC_DIR, './'));

          case 7:
            _context2.next = 9;
            return (0, _ncp.default)(_path.default.resolve(__dirname, '../templates/src/middleware/ts/yoga/'), _path.default.resolve(MIDDLEWARE_PATH, './'));

          case 9:
            _context2.next = 11;
            return (0, _ncp.default)(_path.default.resolve(__dirname, '../templates/src/module/ts-graphql/module/'), _path.default.resolve(MODULE_PATH, './'));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _graphqlYogaTs.apply(this, arguments);
}