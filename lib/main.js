import fs from 'fs';
import ora from 'ora';
import path from 'path';
import { confirmCreate, selectOptions } from './options';
import { contribute } from './contribute/main';
import { installPackage } from './contribute/npm';

export async function run(rawName) {
  try {
    const inPlace = !rawName || rawName === '.';
    let name = inPlace ? path.relative('../', process.cwd()) : rawName;
    name = name.replace(/\.\.\/|\.\//g, '');
    const toDirName = path.resolve(rawName || '.');
    const isExistDir = fs.existsSync(toDirName);

    const confirmContinue = await confirmCreate(
      inPlace,
      isExistDir,
      name,
      toDirName,
    );
    if (!confirmContinue) {
      throw new Error('exist');
    }

    const options = await selectOptions();

    await contribute(toDirName, options);

    await installPackage(toDirName);

    const spinner = ora('check health ...').start();

    await new Promise(resolve => {
      setTimeout(() => {
        spinner.succeed('Enjoy your time, Bye bye.');
        resolve();
      }, 2000);
    });
  } catch (err) {
    if (err.message !== 'exist') {
      console.error(err);
    }
    process.exit(0);
  }
}
