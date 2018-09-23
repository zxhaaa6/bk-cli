import fs from 'fs';
import path from 'path';
import { confirmCreate, selectOptions } from './options';
const log = console.log;

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
  } catch (err) {
    if (err.message !== 'exist') {
      console.error(err);
    }
    process.exit(0);
  }
}
