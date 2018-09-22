import chalk from 'chalk';
import inquirer from 'inquirer';

export async function confirmCreate(inPlace, name, dir) {
  const answers = await inquirer.prompt([
    {
      type: 'confirm',
      message: inPlace
        ? `Generate project in current directory?`
        : 'Target directory exists. Continue?',
      name: 'ok',
    },
  ]);
  console.log(answers);
}
