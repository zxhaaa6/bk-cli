import download from 'download-git-repo';
import fs from 'fs';
import ora from 'ora';
import path from 'path';
import rm from 'rimraf';
import { handleGraphqlContribute } from './graphql';
import { handleRestContribute } from './rest';

export async function contribute(dir, options) {
  await handleTemplate();
  const spinner = ora('I am doing my best to generate project.').start();

  if (options.apiType === 'graphql') {
    await handleGraphqlContribute(dir, options);
  } else {
    await handleRestContribute(dir, options);
  }

  await new Promise(resolve => {
    setTimeout(() => {
      spinner.info('Generate project done!');
      resolve();
    }, 3000);
  });
}

async function handleTemplate() {
  const existCacheDir = fs.existsSync(path.resolve(__dirname, '../templates'));
  const existRepoInfo = fs.existsSync(
    path.resolve(__dirname, '../templates/repoInfo'),
  );

  let currVersion = 'x';
  let needUpdateTemplate = true;

  if (existCacheDir && existRepoInfo) {
    const tplFile = JSON.parse(
      fs.readFileSync(
        path.resolve(__dirname, '../templates/repoInfo/version.json'),
      ),
    );
    currVersion = tplFile.version;
  }

  let spinner = ora('Hold on... I am checking version.').start();
  const updateInfo = await checkVersion(currVersion, existRepoInfo);
  spinner.info(`Checked version ok. version:${updateInfo.version}`);
  needUpdateTemplate = updateInfo.update;

  if (needUpdateTemplate) {
    spinner = ora('Updating generator to latest version ...').start();
    rm.sync(path.resolve(__dirname, '../templates/src'));
    await downloadTemplate();
    spinner.info(`Updated ok!`);
  }
}

async function downloadTemplate() {
  await new Promise(resolve => {
    download(
      'direct:https://github.com/zxhaaa6/bk-cli-template.git',
      path.resolve(__dirname, '../templates/src'),
      { clone: true },
      err => {
        resolve(err);
      },
    );
  });
}

async function checkVersion(version, existRepoInfo) {
  await new Promise(resolve => {
    download(
      'direct:https://github.com/zxhaaa6/bk-cli-template.git#version',
      path.resolve(__dirname, '../templates/tmpVersion'),
      { clone: true },
      err => {
        resolve(err);
      },
    );
  });
  const tmpVersion = JSON.parse(
    fs.readFileSync(
      path.resolve(__dirname, '../templates/tmpVersion/version.json'),
    ),
  );
  if (tmpVersion.version === version) {
    rm.sync(path.resolve(__dirname, '../templates/tmpVersion'));
    return { version: tmpVersion.version, update: false };
  }
  if (existRepoInfo) {
    rm.sync(path.resolve(__dirname, '../templates/repoInfo'));
  }

  fs.renameSync(
    path.resolve(__dirname, '../templates/tmpVersion'),
    path.resolve(__dirname, '../templates/repoInfo'),
  );
  return { version: tmpVersion.version, update: true };
}
