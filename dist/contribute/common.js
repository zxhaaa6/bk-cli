"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleCommonDirAndFiles = handleCommonDirAndFiles;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _ncp = _interopRequireDefault(require("../util/ncp"));

function handleCommonDirAndFiles(_x, _x2) {
  return _handleCommonDirAndFiles.apply(this, arguments);
}

function _handleCommonDirAndFiles() {
  _handleCommonDirAndFiles = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(dir, options) {
    var SRC_PATH, CONFIG_PATH, MIDDLEWARE_PATH, MODULE_PATH, MODEL_PATH, dockerComposeFileDir;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            SRC_PATH = _path.default.resolve(dir, './src');
            CONFIG_PATH = _path.default.resolve(dir, './src/config');
            MIDDLEWARE_PATH = _path.default.resolve(dir, './src/middleware');
            MODULE_PATH = _path.default.resolve(dir, './src/module');
            MODEL_PATH = _path.default.resolve(dir, './src/model');

            _fs.default.mkdirSync(SRC_PATH);

            _fs.default.mkdirSync(CONFIG_PATH);

            _fs.default.mkdirSync(MIDDLEWARE_PATH);

            _fs.default.mkdirSync(MODULE_PATH);

            _fs.default.mkdirSync(MODEL_PATH);

            _fs.default.copyFileSync(_path.default.resolve(__dirname, '../templates/src/config/log4js.json'), _path.default.resolve(CONFIG_PATH, "./log4js.json"));

            if (!options.features.includes('Webpack')) {
              _context.next = 17;
              break;
            }

            if (!(options.jsType === 'typescript')) {
              _context.next = 16;
              break;
            }

            _fs.default.copyFileSync(_path.default.resolve(__dirname, '../templates/src/webpack/ts/webpack.config.js'), _path.default.resolve(dir, './webpack.config.js'));

            _context.next = 17;
            break;

          case 16:
            throw new Error('Sorry, this feature will coming soon');

          case 17:
            if (!options.features.includes('Linter / Formatter')) {
              _context.next = 26;
              break;
            }

            _fs.default.copyFileSync(_path.default.resolve(__dirname, '../templates/src/common/.prettierrc'), _path.default.resolve(dir, './.prettierrc'));

            if (!(options.jsType === 'typescript')) {
              _context.next = 24;
              break;
            }

            _context.next = 22;
            return (0, _ncp.default)(_path.default.resolve(__dirname, '../templates/src/common/ts/'), _path.default.resolve(dir, './'));

          case 22:
            _context.next = 26;
            break;

          case 24:
            _context.next = 26;
            return (0, _ncp.default)(_path.default.resolve(__dirname, '../templates/src/common/js/'), _path.default.resolve(dir, './'));

          case 26:
            if (!options.features.includes('Docker Compose')) {
              _context.next = 65;
              break;
            }

            _fs.default.copyFileSync(_path.default.resolve(__dirname, '../templates/src/docker/.dockerignore'), _path.default.resolve(dir, './.dockerignore'));

            _fs.default.copyFileSync(_path.default.resolve(__dirname, '../templates/src/docker/Dockerfile'), _path.default.resolve(dir, './Dockerfile'));

            dockerComposeFileDir = '../templates/src/docker/normal/docker-compose.yml';
            _context.t0 = options.db;
            _context.next = _context.t0 === 'none' ? 33 : _context.t0 === 'mongodb' ? 42 : _context.t0 === 'mysql' ? 52 : _context.t0 === 'postgres' ? 62 : 63;
            break;

          case 33:
            _context.t1 = options.cache;
            _context.next = _context.t1 === 'none' ? 36 : _context.t1 === 'redis' ? 37 : _context.t1 === 'memcached' ? 39 : 40;
            break;

          case 36:
            return _context.abrupt("break", 41);

          case 37:
            dockerComposeFileDir = '../templates/src/docker/redis/docker-compose.yml';
            return _context.abrupt("break", 41);

          case 39:
            throw new Error('Sorry, this feature will coming soon');

          case 40:
            return _context.abrupt("break", 41);

          case 41:
            return _context.abrupt("break", 64);

          case 42:
            _context.t2 = options.cache;
            _context.next = _context.t2 === 'none' ? 45 : _context.t2 === 'redis' ? 47 : _context.t2 === 'memcached' ? 49 : 50;
            break;

          case 45:
            dockerComposeFileDir = '../templates/src/docker/mongo/docker-compose.yml';
            return _context.abrupt("break", 51);

          case 47:
            dockerComposeFileDir = '../templates/src/docker/mongo/redis/docker-compose.yml';
            return _context.abrupt("break", 51);

          case 49:
            throw new Error('Sorry, this feature will coming soon');

          case 50:
            return _context.abrupt("break", 51);

          case 51:
            return _context.abrupt("break", 64);

          case 52:
            _context.t3 = options.cache;
            _context.next = _context.t3 === 'none' ? 55 : _context.t3 === 'redis' ? 57 : _context.t3 === 'memcached' ? 59 : 60;
            break;

          case 55:
            dockerComposeFileDir = '../templates/src/docker/mysql/docker-compose.yml';
            return _context.abrupt("break", 61);

          case 57:
            dockerComposeFileDir = '../templates/src/docker/mysql/redis/docker-compose.yml';
            return _context.abrupt("break", 61);

          case 59:
            throw new Error('Sorry, this feature will coming soon');

          case 60:
            return _context.abrupt("break", 61);

          case 61:
            return _context.abrupt("break", 64);

          case 62:
            throw new Error('Sorry, this feature will coming soon');

          case 63:
            return _context.abrupt("break", 64);

          case 64:
            _fs.default.copyFileSync(_path.default.resolve(__dirname, dockerComposeFileDir), _path.default.resolve(dir, './docker-compose.yml'));

          case 65:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _handleCommonDirAndFiles.apply(this, arguments);
}