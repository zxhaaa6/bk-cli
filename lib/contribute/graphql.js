import fs from 'fs';
import ora from 'ora';
import path from 'path';
import rm from 'rimraf';
import { handleCommonDirAndFiles } from './common';
import ncp from '../util/ncp';

export async function handleGraphqlContribute(dir, options) {
  await handleCommonDirAndFiles(dir, options);

  if (options.jsType === 'typescript') {
    if (options.framework === 'graphql-yoga') {
      await graphqlYogaTs(dir, options);
    } else if (options.framework === 'express') {
      // express
    } else if (options.framework === 'koa') {
      // koa
    }
  } else {
    if (options.framework === 'graphql-yoga') {
      // graphql
    } else if (options.framework === 'express') {
      // express
    } else if (options.framework === 'koa') {
      // koa
    }
  }
}

async function graphqlYogaTs(dir, options) {
  const SRC_DIR = path.resolve(dir, './src');
  const MIDDLEWARE_PATH = path.resolve(dir, './src/middleware');
  const MODULE_PATH = path.resolve(dir, './src/module');
  fs.copyFileSync(
    path.resolve(
      __dirname,
      '../templates/src/package/ts-graphql-yoga-webpack/package.json',
    ),
    path.resolve(dir, './package.json'),
  );
  fs.copyFileSync(
    path.resolve(
      __dirname,
      '../templates/src/config/ts-graphql-yoga/config.ts',
    ),
    path.resolve(SRC_DIR, './config/config.ts'),
  );
  await ncp(
    path.resolve(__dirname, '../templates/src/app/ts-graphql/yoga/'),
    path.resolve(SRC_DIR, './'),
  );
  await ncp(
    path.resolve(__dirname, '../templates/src/middleware/ts/yoga/'),
    path.resolve(MIDDLEWARE_PATH, './'),
  );
  await ncp(
    path.resolve(__dirname, '../templates/src/module/ts-graphql/module/'),
    path.resolve(MODULE_PATH, './'),
  );
}
