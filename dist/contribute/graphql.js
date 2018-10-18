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
              _context.next = 18;
              break;
            }

            if (!(options.framework === 'graphql-yoga')) {
              _context.next = 8;
              break;
            }

            _context.next = 6;
            return graphqlYogaTs(dir, options);

          case 6:
            _context.next = 16;
            break;

          case 8:
            if (!(options.framework === 'express')) {
              _context.next = 13;
              break;
            }

            _context.next = 11;
            return graphqlExpressTs(dir, options);

          case 11:
            _context.next = 16;
            break;

          case 13:
            if (!(options.framework === 'koa')) {
              _context.next = 16;
              break;
            }

            _context.next = 16;
            return graphqlKoaTs(dir, options);

          case 16:
            _context.next = 19;
            break;

          case 18:
            if (options.framework === 'graphql-yoga') {// graphql
            } else if (options.framework === 'express') {// express
            } else if (options.framework === 'koa') {// koa
            }

          case 19:
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

function graphqlExpressTs(_x5, _x6) {
  return _graphqlExpressTs.apply(this, arguments);
}

function _graphqlExpressTs() {
  _graphqlExpressTs = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3(dir, options) {
    var SRC_DIR, MIDDLEWARE_PATH, MODULE_PATH, MODEL_PATH, SYSTEM_PATH, commonName;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            SRC_DIR = _path.default.resolve(dir, './src');
            MIDDLEWARE_PATH = _path.default.resolve(dir, './src/middleware');
            MODULE_PATH = _path.default.resolve(dir, './src/module');
            MODEL_PATH = _path.default.resolve(dir, './src/model');
            SYSTEM_PATH = _path.default.resolve(dir, './src/system');
            commonName = '-normal';
            _context3.t0 = options.db;
            _context3.next = _context3.t0 === 'none' ? 9 : _context3.t0 === 'mongodb' ? 11 : _context3.t0 === 'mysql' ? 16 : 18;
            break;

          case 9:
            commonName = '-normal';
            return _context3.abrupt("break", 18);

          case 11:
            commonName = '-mongo';
            _context3.next = 14;
            return (0, _ncp.default)(_path.default.resolve(__dirname, '../templates/src/model/ts/mongo/'), _path.default.resolve(MODEL_PATH, './'));

          case 14:
            _fs.default.copyFileSync(_path.default.resolve(__dirname, "../templates/src/system/ts/mongoManager.ts"), _path.default.resolve(SYSTEM_PATH, './mongoManager.ts'));

            return _context3.abrupt("break", 18);

          case 16:
            commonName = '-mysql';
            return _context3.abrupt("break", 18);

          case 18:
            _fs.default.copyFileSync(_path.default.resolve(__dirname, "../templates/src/package/ts-graphql-express/package".concat(commonName, ".json")), _path.default.resolve(dir, './package.json'));

            _fs.default.copyFileSync(_path.default.resolve(__dirname, "../templates/src/config/ts-graphql-yoga/config".concat(commonName, ".ts")), _path.default.resolve(SRC_DIR, './config/config.ts'));

            _fs.default.copyFileSync(_path.default.resolve(__dirname, "../templates/src/app/ts-graphql/express/app.ts"), _path.default.resolve(SRC_DIR, './app.ts'));

            _fs.default.copyFileSync(_path.default.resolve(__dirname, "../templates/src/app/ts-graphql/express/main".concat(commonName, ".ts")), _path.default.resolve(SRC_DIR, './main.ts'));

            _context3.next = 24;
            return (0, _ncp.default)(_path.default.resolve(__dirname, '../templates/src/middleware/ts/graphql-express/'), _path.default.resolve(MIDDLEWARE_PATH, './'));

          case 24:
            _context3.next = 26;
            return (0, _ncp.default)(_path.default.resolve(__dirname, '../templates/src/module/ts-graphql/module/'), _path.default.resolve(MODULE_PATH, './'));

          case 26:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _graphqlExpressTs.apply(this, arguments);
}

function graphqlKoaTs(_x7, _x8) {
  return _graphqlKoaTs.apply(this, arguments);
}

function _graphqlKoaTs() {
  _graphqlKoaTs = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee4(dir, options) {
    var SRC_DIR, MODULE_PATH, MODEL_PATH, SYSTEM_PATH, commonName;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            SRC_DIR = _path.default.resolve(dir, './src');
            MODULE_PATH = _path.default.resolve(dir, './src/module');
            MODEL_PATH = _path.default.resolve(dir, './src/model');
            SYSTEM_PATH = _path.default.resolve(dir, './src/system');
            commonName = '-normal';
            _context4.t0 = options.db;
            _context4.next = _context4.t0 === 'none' ? 8 : _context4.t0 === 'mongodb' ? 10 : _context4.t0 === 'mysql' ? 15 : 17;
            break;

          case 8:
            commonName = '-normal';
            return _context4.abrupt("break", 17);

          case 10:
            commonName = '-mongo';
            _context4.next = 13;
            return (0, _ncp.default)(_path.default.resolve(__dirname, '../templates/src/model/ts/mongo/'), _path.default.resolve(MODEL_PATH, './'));

          case 13:
            _fs.default.copyFileSync(_path.default.resolve(__dirname, "../templates/src/system/ts/mongoManager.ts"), _path.default.resolve(SYSTEM_PATH, './mongoManager.ts'));

            return _context4.abrupt("break", 17);

          case 15:
            commonName = '-mysql';
            return _context4.abrupt("break", 17);

          case 17:
            _fs.default.copyFileSync(_path.default.resolve(__dirname, "../templates/src/package/ts-graphql-koa/package".concat(commonName, ".json")), _path.default.resolve(dir, './package.json'));

            _fs.default.copyFileSync(_path.default.resolve(__dirname, "../templates/src/config/ts-graphql-yoga/config".concat(commonName, ".ts")), _path.default.resolve(SRC_DIR, './config/config.ts'));

            _fs.default.copyFileSync(_path.default.resolve(__dirname, "../templates/src/app/ts-graphql/koa/app.ts"), _path.default.resolve(SRC_DIR, './app.ts'));

            _fs.default.copyFileSync(_path.default.resolve(__dirname, "../templates/src/app/ts-graphql/koa/main".concat(commonName, ".ts")), _path.default.resolve(SRC_DIR, './main.ts'));

            _context4.next = 23;
            return (0, _ncp.default)(_path.default.resolve(__dirname, '../templates/src/module/ts-graphql/module/'), _path.default.resolve(MODULE_PATH, './'));

          case 23:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _graphqlKoaTs.apply(this, arguments);
}