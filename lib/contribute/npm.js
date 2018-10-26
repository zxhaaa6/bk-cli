import { exec } from 'child_process';
import ora from 'ora';

export async function installPackage(dir) {
  let spinner = ora('npm install ...').start();
  spinner = await new Promise((resolve, reject) => {
    exec(
      `cd ${dir} && npm install`,
      { encoding: 'utf8' },
      (err, stdout, stderr) => {
        if (err) {
          spinner = spinner.fail(`npm error: ${err}`);
          reject(err);
        }
        spinner = spinner.info(stdout);
        spinner = spinner.info(stderr);
        resolve(spinner);
      },
    );
  });
  spinner.succeed('npm install successfully!');
}
