#! /usr/bin/env node
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _commander = _interopRequireDefault(require("commander"));

var _chalk = _interopRequireDefault(require("chalk"));

var _config = _interopRequireDefault(require("./config"));

var _main = require("./main");

var log = console.log;

_commander.default.version(_config.default.version, '-v, --version').usage('init [project-name]');

_commander.default.command('init <project_name>').description('create a new project with giving name').action(function (project_name) {
  (0, _main.run)(project_name);
});

_commander.default.command('*').description('you can create a new project quickly').action(function (project_name) {
  (0, _main.run)(project_name);
});

_commander.default.on('--help', function () {
  log();
  log('Examples:');
  log();
  log(_chalk.default.gray('    # create a new project with an official template'));
  log(_chalk.default.green('    $ bk-cli init my-project'));
  log();
});

(function () {
  _commander.default.parse(process.argv);

  if (_commander.default.args.length < 1) return _commander.default.help();
})();