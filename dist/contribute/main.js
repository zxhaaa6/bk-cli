"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contribute = contribute;

var _downloadGitRepo = _interopRequireDefault(require("download-git-repo"));

var _fs = _interopRequireDefault(require("fs"));

var _ora = _interopRequireDefault(require("ora"));

var _path = _interopRequireDefault(require("path"));

var _rimraf = _interopRequireDefault(require("rimraf"));

var _graphql = require("./graphql");

var _rest = require("./rest");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function contribute(_x, _x2) {
  return _contribute.apply(this, arguments);
}

function _contribute() {
  _contribute = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(dir, options) {
    var spinner, existDir;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return handleTemplate();

          case 2:
            spinner = (0, _ora.default)('I am doing my best to generate project.').start();
            existDir = _fs.default.existsSync(dir);

            if (existDir) {
              _rimraf.default.sync(dir);
            }

            _fs.default.mkdirSync(dir);

            if (!(options.apiType === 'graphql')) {
              _context.next = 11;
              break;
            }

            _context.next = 9;
            return (0, _graphql.handleGraphqlContribute)(dir, options);

          case 9:
            _context.next = 13;
            break;

          case 11:
            _context.next = 13;
            return (0, _rest.handleRestContribute)(dir, options);

          case 13:
            _context.next = 15;
            return new Promise(function (resolve) {
              setTimeout(function () {
                spinner.info('Generate project done!');
                resolve();
              }, 3000);
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _contribute.apply(this, arguments);
}

function handleTemplate() {
  return _handleTemplate.apply(this, arguments);
}

function _handleTemplate() {
  _handleTemplate = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var existCacheDir, existRepoInfo, currVersion, needUpdateTemplate, tplFile, spinner, updateInfo;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            existCacheDir = _fs.default.existsSync(_path.default.resolve(__dirname, '../templates'));
            existRepoInfo = _fs.default.existsSync(_path.default.resolve(__dirname, '../templates/repoInfo'));
            currVersion = 'x';
            needUpdateTemplate = true;

            if (existCacheDir && existRepoInfo) {
              tplFile = JSON.parse(_fs.default.readFileSync(_path.default.resolve(__dirname, '../templates/repoInfo/version.json')));
              currVersion = tplFile.version;
            }

            spinner = (0, _ora.default)('Hold on... I am checking version.').start();
            _context2.next = 8;
            return checkVersion(currVersion, existRepoInfo);

          case 8:
            updateInfo = _context2.sent;
            spinner.info("Checked version ok. version:".concat(updateInfo.version));
            needUpdateTemplate = updateInfo.update;

            if (!needUpdateTemplate) {
              _context2.next = 17;
              break;
            }

            spinner = (0, _ora.default)('Updating generator to latest version ...').start();

            _rimraf.default.sync(_path.default.resolve(__dirname, '../templates/src'));

            _context2.next = 16;
            return downloadTemplate();

          case 16:
            spinner.info("Updated ok!");

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _handleTemplate.apply(this, arguments);
}

function downloadTemplate() {
  return _downloadTemplate.apply(this, arguments);
}

function _downloadTemplate() {
  _downloadTemplate = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return new Promise(function (resolve) {
              (0, _downloadGitRepo.default)('direct:https://github.com/zxhaaa6/bk-cli-template.git', _path.default.resolve(__dirname, '../templates/src'), {
                clone: true
              }, function (err) {
                resolve(err);
              });
            });

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _downloadTemplate.apply(this, arguments);
}

function checkVersion(_x3, _x4) {
  return _checkVersion.apply(this, arguments);
}

function _checkVersion() {
  _checkVersion = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(version, existRepoInfo) {
    var tmpVersion;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return new Promise(function (resolve) {
              (0, _downloadGitRepo.default)('direct:https://github.com/zxhaaa6/bk-cli-template.git#version', _path.default.resolve(__dirname, '../templates/tmpVersion'), {
                clone: true
              }, function (err) {
                resolve(err);
              });
            });

          case 2:
            tmpVersion = JSON.parse(_fs.default.readFileSync(_path.default.resolve(__dirname, '../templates/tmpVersion/version.json')));

            if (!(tmpVersion.version === version)) {
              _context4.next = 6;
              break;
            }

            _rimraf.default.sync(_path.default.resolve(__dirname, '../templates/tmpVersion'));

            return _context4.abrupt("return", {
              version: tmpVersion.version,
              update: false
            });

          case 6:
            if (existRepoInfo) {
              _rimraf.default.sync(_path.default.resolve(__dirname, '../templates/repoInfo'));
            }

            _fs.default.renameSync(_path.default.resolve(__dirname, '../templates/tmpVersion'), _path.default.resolve(__dirname, '../templates/repoInfo'));

            return _context4.abrupt("return", {
              version: tmpVersion.version,
              update: true
            });

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _checkVersion.apply(this, arguments);
}