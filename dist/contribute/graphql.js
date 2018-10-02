"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleGraphqlContribute = handleGraphqlContribute;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _common = require("./common");

var _ncp = _interopRequireDefault(require("../util/ncp"));

function handleGraphqlContribute(_x, _x2) {
  return _handleGraphqlContribute.apply(this, arguments);
}

function _handleGraphqlContribute() {
  _handleGraphqlContribute = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(dir, options) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _common.handleCommonDirAndFiles)(dir, options);

          case 2:
            if (!(options.jsType === 'typescript')) {
              _context.next = 11;
              break;
            }

            if (!(options.framework === 'graphql-yoga')) {
              _context.next = 8;
              break;
            }

            _context.next = 6;
            return graphqlYogaTs(dir, options);

          case 6:
            _context.next = 9;
            break;

          case 8:
            if (options.framework === 'express') {// express
            } else if (options.framework === 'koa') {// koa
            }

          case 9:
            _context.next = 12;
            break;

          case 11:
            if (options.framework === 'graphql-yoga') {// graphql
            } else if (options.framework === 'express') {// express
            } else if (options.framework === 'koa') {// koa
            }

          case 12:
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
    var SRC_DIR, MIDDLEWARE_PATH, MODULE_PATH, MODEL_PATH, SYSTEM_PATH, commonName;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            SRC_DIR = _path.default.resolve(dir, './src');
            MIDDLEWARE_PATH = _path.default.resolve(dir, './src/middleware');
            MODULE_PATH = _path.default.resolve(dir, './src/module');
            MODEL_PATH = _path.default.resolve(dir, './src/model');
            SYSTEM_PATH = _path.default.resolve(dir, './src/system');
            commonName = '-normal';
            _context2.t0 = options.db;
            _context2.next = _context2.t0 === 'none' ? 9 : _context2.t0 === 'mongodb' ? 11 : _context2.t0 === 'mysql' ? 16 : 18;
            break;

          case 9:
            commonName = '-normal';
            return _context2.abrupt("break", 18);

          case 11:
            commonName = '-mongo';
            _context2.next = 14;
            return (0, _ncp.default)(_path.default.resolve(__dirname, '../templates/src/model/ts/mongo/'), _path.default.resolve(MODEL_PATH, './'));

          case 14:
            _fs.default.copyFileSync(_path.default.resolve(__dirname, "../templates/src/system/ts/mongoManager.ts"), _path.default.resolve(SYSTEM_PATH, './mongoManager.ts'));

            return _context2.abrupt("break", 18);

          case 16:
            commonName = '-mysql';
            return _context2.abrupt("break", 18);

          case 18:
            _fs.default.copyFileSync(_path.default.resolve(__dirname, "../templates/src/package/ts-graphql-yoga-webpack/package".concat(commonName, ".json")), _path.default.resolve(dir, './package.json'));

            _fs.default.copyFileSync(_path.default.resolve(__dirname, "../templates/src/config/ts-graphql-yoga/config".concat(commonName, ".ts")), _path.default.resolve(SRC_DIR, './config/config.ts'));

            _fs.default.copyFileSync(_path.default.resolve(__dirname, "../templates/src/app/ts-graphql/yoga/app.ts"), _path.default.resolve(SRC_DIR, './app.ts'));

            _fs.default.copyFileSync(_path.default.resolve(__dirname, "../templates/src/app/ts-graphql/yoga/main".concat(commonName, ".ts")), _path.default.resolve(SRC_DIR, './main.ts'));

            _context2.next = 24;
            return (0, _ncp.default)(_path.default.resolve(__dirname, '../templates/src/middleware/ts/yoga/'), _path.default.resolve(MIDDLEWARE_PATH, './'));

          case 24:
            _context2.next = 26;
            return (0, _ncp.default)(_path.default.resolve(__dirname, '../templates/src/module/ts-graphql/module/'), _path.default.resolve(MODULE_PATH, './'));

          case 26:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _graphqlYogaTs.apply(this, arguments);
}