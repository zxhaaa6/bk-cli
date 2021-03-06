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
  return options;
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
    message: 'What type language would you like?',
    choices: ['Javascript', 'Typescript'],
    filter: val => {
      return val.toLowerCase();
    },
  },
  {
    type: 'list',
    name: 'framework',
    message: 'Which Web Framework would you like?',
    choices: [
      'Express',
      'Koa',
      'Egg(coming soon)',
      'Nest(coming soon)',
      'Graphql-yoga',
    ],
    filter: val => {
      return val.toLowerCase();
    },
  },
  {
    type: 'checkbox',
    message: 'Check features needed for your project',
    name: 'features',
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
      {
        name: 'Docker Compose',
      },
    ],
    validate: answer => {
      return true;
    },
  },
  {
    type: 'list',
    name: 'db',
    message: 'Which DB client would you use?',
    choices: ['None', 'Mongodb', 'Mysql', 'Postgres(coming soon)'],
    filter: val => {
      return val.toLowerCase();
    },
  },
  {
    type: 'list',
    name: 'cache',
    message: 'Would you like a cache middleware?',
    choices: ['None', 'Redis', 'Memcached(coming soon)'],
    filter: val => {
      return val.toLowerCase();
    },
  },
];

function featureOptions(options) {
  const choices = [];
  if (options.jsType === 'typescript') {
    choices.push({
      name: 'Webpack',
      checked: true,
    });
  }
}
