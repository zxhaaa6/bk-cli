import fs from 'fs';
import ora from 'ora';
import path from 'path';
import rm from 'rimraf';
import { handleCommonDirAndFiles } from './common';

export async function handleGraphqlContribute(dir, options) {
  const existDir = fs.existsSync(dir);
  if (existDir) {
    rm.sync(dir);
  }
  fs.mkdirSync(dir);

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
  if (options.features.includes('Webpack')) {
    fs.copyFileSync(
      path.resolve(
        __dirname,
        '../templates/src/package/ts-graphql-yoga-webpack/package.json',
      ),
      path.resolve(dir, './package.json'),
    );
  }
}
