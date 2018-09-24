import download from 'download-git-repo';
import fs from 'fs';
import ora from 'ora';
import path from 'path';
import rm from 'rimraf';

export async function contribute(options) {
  await handleTemplate();
  const spinner = ora('I am doing my best to generate project.').start();
  await new Promise(resolve => {
    setTimeout(() => {
      spinner.info('Generate project done!');
      resolve();
    }, 3000);
  });
}

async function handleTemplate() {
  const existCacheDir = fs.existsSync(path.resolve(__dirname, '../templates'));

  let needUpdateTemplate = true;

  if (existCacheDir) {
    const tplFile = JSON.parse(
      fs.readFileSync(
        path.resolve(__dirname, '../templates/repoInfo/version.json'),
      ),
    );
    const spinner = ora('Hold on... I am checking version.').start();
    const updateInfo = await checkVersion(tplFile.version);
    spinner.info(`Checked version ok. version:${updateInfo.version}`);
    needUpdateTemplate = updateInfo.update;
  }

  if (needUpdateTemplate) {
    await downloadTemplate();
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

async function checkVersion(version) {
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
  rm.sync(path.resolve(__dirname, '../templates/repoInfo'));
  fs.renameSync(
    path.resolve(__dirname, '../templates/tmpVersion'),
    path.resolve(__dirname, '../templates/repoInfo'),
  );
  return { version: tmpVersion.version, update: true };
}
