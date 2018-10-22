"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleCommonDirAndFiles = handleCommonDirAndFiles;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _ncp = _interopRequireDefault(require("../util/ncp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function handleCommonDirAndFiles(_x, _x2) {
  return _handleCommonDirAndFiles.apply(this, arguments);
}

function _handleCommonDirAndFiles() {
  _handleCommonDirAndFiles = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(dir, options) {
    var SRC_PATH, CONFIG_PATH, MIDDLEWARE_PATH, MODULE_PATH, MODEL_PATH, SYSTEM_PATH, dockerComposeFileDir;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            SRC_PATH = _path.default.resolve(dir, './src');
            CONFIG_PATH = _path.default.resolve(dir, './src/config');
            MIDDLEWARE_PATH = _path.default.resolve(dir, './src/middleware');
            MODULE_PATH = _path.default.resolve(dir, './src/module');
            MODEL_PATH = _path.default.resolve(dir, './src/model');
            SYSTEM_PATH = _path.default.resolve(dir, './src/system');

            _fs.default.mkdirSync(SRC_PATH);

            _fs.default.mkdirSync(CONFIG_PATH);

            _fs.default.mkdirSync(MIDDLEWARE_PATH);

            _fs.default.mkdirSync(MODULE_PATH);

            _fs.default.mkdirSync(MODEL_PATH);

            _fs.default.mkdirSync(SYSTEM_PATH);

            _fs.default.copyFileSync(_path.default.resolve(__dirname, '../templates/src/config/log4js.json'), _path.default.resolve(CONFIG_PATH, "./log4js.json"));

            if (options.jsType === 'typescript') {
              _fs.default.copyFileSync(_path.default.resolve(__dirname, '../templates/src/common/tsconfig.json'), _path.default.resolve(dir, './tsconfig.json'));
            }

            if (!options.features.includes('Webpack')) {
              _context.next = 20;
              break;
            }

            if (!(options.jsType === 'typescript')) {
              _context.next = 19;
              break;
            }

            _fs.default.copyFileSync(_path.default.resolve(__dirname, '../templates/src/webpack/ts/webpack.config.js'), _path.default.resolve(dir, './webpack.config.js'));

            _context.next = 20;
            break;

          case 19:
            throw new Error('Sorry, this feature will coming soon');

          case 20:
            if (!options.features.includes('Linter / Formatter')) {
              _context.next = 29;
              break;
            }

            _fs.default.copyFileSync(_path.default.resolve(__dirname, '../templates/src/common/.prettierrc'), _path.default.resolve(dir, './.prettierrc'));

            if (!(options.jsType === 'typescript')) {
              _context.next = 27;
              break;
            }

            _context.next = 25;
            return (0, _ncp.default)(_path.default.resolve(__dirname, '../templates/src/common/ts/'), _path.default.resolve(dir, './'));

          case 25:
            _context.next = 29;
            break;

          case 27:
            _context.next = 29;
            return (0, _ncp.default)(_path.default.resolve(__dirname, '../templates/src/common/js/'), _path.default.resolve(dir, './'));

          case 29:
            if (!options.features.includes('Docker Compose')) {
              _context.next = 68;
              break;
            }

            _fs.default.copyFileSync(_path.default.resolve(__dirname, '../templates/src/docker/.dockerignore'), _path.default.resolve(dir, './.dockerignore'));

            _fs.default.copyFileSync(_path.default.resolve(__dirname, '../templates/src/docker/Dockerfile'), _path.default.resolve(dir, './Dockerfile'));

            dockerComposeFileDir = '../templates/src/docker/normal/docker-compose.yml';
            _context.t0 = options.db;
            _context.next = _context.t0 === 'none' ? 36 : _context.t0 === 'mongodb' ? 45 : _context.t0 === 'mysql' ? 55 : _context.t0 === 'postgres' ? 65 : 66;
            break;

          case 36:
            _context.t1 = options.cache;
            _context.next = _context.t1 === 'none' ? 39 : _context.t1 === 'redis' ? 40 : _context.t1 === 'memcached' ? 42 : 43;
            break;

          case 39:
            return _context.abrupt("break", 44);

          case 40:
            dockerComposeFileDir = '../templates/src/docker/redis/docker-compose.yml';
            return _context.abrupt("break", 44);

          case 42:
            throw new Error('Sorry, this feature will coming soon');

          case 43:
            return _context.abrupt("break", 44);

          case 44:
            return _context.abrupt("break", 67);

          case 45:
            _context.t2 = options.cache;
            _context.next = _context.t2 === 'none' ? 48 : _context.t2 === 'redis' ? 50 : _context.t2 === 'memcached' ? 52 : 53;
            break;

          case 48:
            dockerComposeFileDir = '../templates/src/docker/mongo/docker-compose.yml';
            return _context.abrupt("break", 54);

          case 50:
            dockerComposeFileDir = '../templates/src/docker/mongo/redis/docker-compose.yml';
            return _context.abrupt("break", 54);

          case 52:
            throw new Error('Sorry, this feature will coming soon');

          case 53:
            return _context.abrupt("break", 54);

          case 54:
            return _context.abrupt("break", 67);

          case 55:
            _context.t3 = options.cache;
            _context.next = _context.t3 === 'none' ? 58 : _context.t3 === 'redis' ? 60 : _context.t3 === 'memcached' ? 62 : 63;
            break;

          case 58:
            dockerComposeFileDir = '../templates/src/docker/mysql/docker-compose.yml';
            return _context.abrupt("break", 64);

          case 60:
            dockerComposeFileDir = '../templates/src/docker/mysql/redis/docker-compose.yml';
            return _context.abrupt("break", 64);

          case 62:
            throw new Error('Sorry, this feature will coming soon');

          case 63:
            return _context.abrupt("break", 64);

          case 64:
            return _context.abrupt("break", 67);

          case 65:
            throw new Error('Sorry, this feature will coming soon');

          case 66:
            return _context.abrupt("break", 67);

          case 67:
            _fs.default.copyFileSync(_path.default.resolve(__dirname, dockerComposeFileDir), _path.default.resolve(dir, './docker-compose.yml'));

          case 68:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _handleCommonDirAndFiles.apply(this, arguments);
}