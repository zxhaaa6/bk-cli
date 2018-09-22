#! /usr/bin/env node
import program from 'commander';
import chalk from 'chalk';
import { run } from './main';
const log = console.log;

program.version('0.0.1', '-v, --version').usage('init [project-name]');

program
  .command('init <project_name>')
  .description('create a new project with giving name')
  .action(project_name => {
    run(project_name);
  });
program
  .command('*')
  .description('you can create a new project quickly')
  .action(project_name => {
    run(project_name);
  });
program.on('--help', () => {
  log();
  log('Examples:');
  log();
  log(chalk.gray('    # create a new project with an official template'));
  log(chalk.green('    $ bk-cli init my-project'));
  log();
});

(() => {
  program.parse(process.argv);
  if (program.args.length < 1) return program.help();
})();
