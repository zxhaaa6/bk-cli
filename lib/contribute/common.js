import fs from 'fs';
import path from 'path';
import ncp from '../util/ncp';

export async function handleCommonDirAndFiles(dir, options) {
  const SRC_PATH = path.resolve(dir, './src');
  const CONFIG_PATH = path.resolve(dir, './src/config');
  const MIDDLEWARE_PATH = path.resolve(dir, './src/middleware');
  const MODULE_PATH = path.resolve(dir, './src/module');
  const MODEL_PATH = path.resolve(dir, './src/model');
  fs.mkdirSync(SRC_PATH);
  fs.mkdirSync(CONFIG_PATH);
  fs.mkdirSync(MIDDLEWARE_PATH);
  fs.mkdirSync(MODULE_PATH);
  fs.mkdirSync(MODEL_PATH);
  fs.copyFileSync(
    path.resolve(__dirname, '../templates/src/config/log4js.json'),
    path.resolve(CONFIG_PATH, `./log4js.json`),
  );

  if (options.features.includes('Webpack')) {
    if (options.jsType === 'typescript') {
      fs.copyFileSync(
        path.resolve(
          __dirname,
          '../templates/src/webpack/ts/webpack.config.js',
        ),
        path.resolve(dir, './webpack.config.js'),
      );
    } else {
      throw new Error('Sorry, this feature will coming soon');
    }
  }

  if (options.features.includes('Linter / Formatter')) {
    fs.copyFileSync(
      path.resolve(__dirname, '../templates/src/common/.prettierrc'),
      path.resolve(dir, './.prettierrc'),
    );
    if (options.jsType === 'typescript') {
      await ncp(
        path.resolve(__dirname, '../templates/src/common/ts/'),
        path.resolve(dir, './'),
      );
    } else {
      await ncp(
        path.resolve(__dirname, '../templates/src/common/js/'),
        path.resolve(dir, './'),
      );
    }
  }
  if (options.features.includes('Docker Compose')) {
    fs.copyFileSync(
      path.resolve(__dirname, '../templates/src/docker/.dockerignore'),
      path.resolve(dir, './.dockerignore'),
    );
    fs.copyFileSync(
      path.resolve(__dirname, '../templates/src/docker/Dockerfile'),
      path.resolve(dir, './Dockerfile'),
    );
    let dockerComposeFileDir =
      '../templates/src/docker/normal/docker-compose.yml';
    switch (options.db) {
      case 'none':
        switch (options.cache) {
          case 'none':
            break;
          case 'redis':
            dockerComposeFileDir =
              '../templates/src/docker/redis/docker-compose.yml';
            break;
          case 'memcached':
            throw new Error('Sorry, this feature will coming soon');
          default:
            break;
        }
        break;
      case 'mongodb':
        switch (options.cache) {
          case 'none':
            dockerComposeFileDir =
              '../templates/src/docker/mongo/docker-compose.yml';
            break;
          case 'redis':
            dockerComposeFileDir =
              '../templates/src/docker/mongo/redis/docker-compose.yml';
            break;
          case 'memcached':
            throw new Error('Sorry, this feature will coming soon');
          default:
            break;
        }
        break;
      case 'mysql':
        switch (options.cache) {
          case 'none':
            dockerComposeFileDir =
              '../templates/src/docker/mysql/docker-compose.yml';
            break;
          case 'redis':
            dockerComposeFileDir =
              '../templates/src/docker/mysql/redis/docker-compose.yml';
            break;
          case 'memcached':
            throw new Error('Sorry, this feature will coming soon');
          default:
            break;
        }
        break;
      case 'postgres':
        throw new Error('Sorry, this feature will coming soon');
      default:
        break;
    }
    fs.copyFileSync(
      path.resolve(__dirname, dockerComposeFileDir),
      path.resolve(dir, './docker-compose.yml'),
    );
  }
}
