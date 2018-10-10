"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _ncp = _interopRequireDefault(require("ncp"));

function _default(source, destination) {
  return new Promise(function (resolve, reject) {
    _ncp.default.limit = 16;
    (0, _ncp.default)(source, destination, function (err) {
      if (err) {
        reject(new Error(err));
      } else {
        resolve();
      }
    });
  });
}