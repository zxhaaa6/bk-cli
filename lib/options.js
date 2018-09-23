import chalk from 'chalk';
import inquirer from 'inquirer';

export async function confirmCreate(inPlace, isExistDir, name, dir) {
  const answer = await inquirer.prompt([
    {
      type: 'confirm',
      message: inPlace
        ? `Generate project in current directory?`
        : isExistDir
          ? `Target directory ${dir} exists. Continue?`
          : `Generate project in directory ${dir}. Continue?`,
      name: 'ok',
    },
  ]);
  return answer.ok;
}

export async function selectOptions() {
  const options = await inquirer.prompt(typeOptions);
  console.log(options);
}

const typeOptions = [
  {
    type: 'list',
    name: 'apiType',
    message: 'Which api service do you need?',
    choices: ['REST', 'GraphQL'],
    filter: val => {
      return val.toLowerCase();
    },
  },
  {
    type: 'list',
    name: 'jsType',
    message: 'What type language do you like?',
    choices: ['Javascript', 'Typescript'],
    filter: val => {
      return val.toLowerCase();
    },
  },
  {
    type: 'checkbox',
    message: 'Check features needed for your project',
    name: 'toppings',
    choices: [
      {
        name: 'Webpack',
        checked: true,
      },
      {
        name: 'Babel',
      },
      {
        name: 'Linter / Formatter',
        checked: true,
      },
      {
        name: 'Unit Testing',
      },
    ],
    validate: answer => {
      return true;
    },
  },
];
