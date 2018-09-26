"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contribute = contribute;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _downloadGitRepo = _interopRequireDefault(require("download-git-repo"));

var _fs = _interopRequireDefault(require("fs"));

var _ora = _interopRequireDefault(require("ora"));

var _path = _interopRequireDefault(require("path"));

var _rimraf = _interopRequireDefault(require("rimraf"));

var _graphql = require("./graphql");

var _rest = require("./rest");

function contribute(_x, _x2) {
  return _contribute.apply(this, arguments);
}

function _contribute() {
  _contribute = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(dir, options) {
    var spinner;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return handleTemplate();

          case 2:
            spinner = (0, _ora.default)('I am doing my best to generate project.').start();

            if (!(options.apiType === 'graphql')) {
              _context.next = 8;
              break;
            }

            _context.next = 6;
            return (0, _graphql.handleGraphqlContribute)(dir, options);

          case 6:
            _context.next = 10;
            break;

          case 8:
            _context.next = 10;
            return (0, _rest.handleRestContribute)(dir, options);

          case 10:
            _context.next = 12;
            return new Promise(function (resolve) {
              setTimeout(function () {
                spinner.info('Generate project done!');
                resolve();
              }, 3000);
            });

          case 12:
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
  _handleTemplate = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2() {
    var existCacheDir, existRepoInfo, currVersion, needUpdateTemplate, tplFile, spinner, updateInfo;
    return _regenerator.default.wrap(function _callee2$(_context2) {
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
  _downloadTemplate = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3() {
    return _regenerator.default.wrap(function _callee3$(_context3) {
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
  _checkVersion = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee4(version, existRepoInfo) {
    var tmpVersion;
    return _regenerator.default.wrap(function _callee4$(_context4) {
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