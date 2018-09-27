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
            if (options.features.includes('Linter / Formatter')) {
              _fs.default.copyFileSync(_path.default.resolve(__dirname, '../templates/src/common/.prettierrc'), _path.default.resolve(dir, './.prettierrc'));

              if (options.jsType === 'typescript') {
                _fs.default.copyFileSync(_path.default.resolve(__dirname, '../templates/src/common/tslint.json'), _path.default.resolve(dir, './tslint.json'));

                _fs.default.copyFileSync(_path.default.resolve(__dirname, '../templates/src/common/tsconfig.json'), _path.default.resolve(dir, './tsconfig.json'));
              } else {
                _fs.default.copyFileSync(_path.default.resolve(__dirname, '../templates/src/common/.eslintrc'), _path.default.resolve(dir, './.eslintrc'));

                _fs.default.copyFileSync(_path.default.resolve(__dirname, '../templates/src/common/.eslintignore'), _path.default.resolve(dir, './.eslintignore'));
              }
            }

            if (!options.features.includes('Docker Compose')) {
              _context.next = 57;
              break;
            }

            _fs.default.copyFileSync(_path.default.resolve(__dirname, '../templates/src/docker/.dockerignore'), _path.default.resolve(dir, './.dockerignore'));

            _fs.default.copyFileSync(_path.default.resolve(__dirname, '../templates/src/docker/Dockerfile'), _path.default.resolve(dir, './Dockerfile'));

            dockerComposeFileDir = '../templates/src/docker/normal/docker-compose.yml';
            _context.t0 = options.db;
            _context.next = _context.t0 === 'none' ? 25 : _context.t0 === 'mongodb' ? 34 : _context.t0 === 'mysql' ? 44 : _context.t0 === 'postgres' ? 54 : 55;
            break;

          case 25:
            _context.t1 = options.cache;
            _context.next = _context.t1 === 'none' ? 28 : _context.t1 === 'redis' ? 29 : _context.t1 === 'memcached' ? 31 : 32;
            break;

          case 28:
            return _context.abrupt("break", 33);

          case 29:
            dockerComposeFileDir = '../templates/src/docker/redis/docker-compose.yml';
            return _context.abrupt("break", 33);

          case 31:
            throw new Error('Sorry, this feature will coming soon');

          case 32:
            return _context.abrupt("break", 33);

          case 33:
            return _context.abrupt("break", 56);

          case 34:
            _context.t2 = options.cache;
            _context.next = _context.t2 === 'none' ? 37 : _context.t2 === 'redis' ? 39 : _context.t2 === 'memcached' ? 41 : 42;
            break;

          case 37:
            dockerComposeFileDir = '../templates/src/docker/mongo/docker-compose.yml';
            return _context.abrupt("break", 43);

          case 39:
            dockerComposeFileDir = '../templates/src/docker/mongo/redis/docker-compose.yml';
            return _context.abrupt("break", 43);

          case 41:
            throw new Error('Sorry, this feature will coming soon');

          case 42:
            return _context.abrupt("break", 43);

          case 43:
            return _context.abrupt("break", 56);

          case 44:
            _context.t3 = options.cache;
            _context.next = _context.t3 === 'none' ? 47 : _context.t3 === 'redis' ? 49 : _context.t3 === 'memcached' ? 51 : 52;
            break;

          case 47:
            dockerComposeFileDir = '../templates/src/docker/mysql/docker-compose.yml';
            return _context.abrupt("break", 53);

          case 49:
            dockerComposeFileDir = '../templates/src/docker/mysql/redis/docker-compose.yml';
            return _context.abrupt("break", 53);

          case 51:
            throw new Error('Sorry, this feature will coming soon');

          case 52:
            return _context.abrupt("break", 53);

          case 53:
            return _context.abrupt("break", 56);

          case 54:
            throw new Error('Sorry, this feature will coming soon');

          case 55:
            return _context.abrupt("break", 56);

          case 56:
            _fs.default.copyFileSync(_path.default.resolve(__dirname, dockerComposeFileDir), _path.default.resolve(dir, './docker-compose.yml'));

          case 57:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _handleCommonDirAndFiles.apply(this, arguments);
}