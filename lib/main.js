import path from 'path';
import { confirmCreate } from './options';
const log = console.log;

export async function run(rawName) {
  try {
    const inPlace = !rawName || rawName === '.';
    const name = inPlace ? path.relative('../', process.cwd()) : rawName;
    const toDirName = path.resolve(rawName || '.');

    await confirmCreate(inPlace, name, toDirName);
  } catch (err) {
    console.error(err);
    process.exit(0);
  }
}
