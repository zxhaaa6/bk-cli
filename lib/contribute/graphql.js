import fs from 'fs';
import path from 'path';
import { handleCommonDirAndFiles } from './common';
import ncp from '../util/ncp';

export async function handleGraphqlContribute(dir, options) {
  await handleCommonDirAndFiles(dir, options);

  if (options.jsType === 'typescript') {
    if (options.framework === 'graphql-yoga') {
      await graphqlYogaTs(dir, options);
    } else if (options.framework === 'express') {
      await graphqlExpressTs(dir, options);
    } else if (options.framework === 'koa') {
      await graphqlKoaTs(dir, options);
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
  const MODEL_PATH = path.resolve(dir, './src/model');
  const SYSTEM_PATH = path.resolve(dir, './src/system');
  let commonName = '-normal';
  switch (options.db) {
    case 'none':
      commonName = '-normal';
      break;
    case 'mongodb':
      commonName = '-mongo';
      await ncp(
        path.resolve(__dirname, '../templates/src/model/ts/mongo/'),
        path.resolve(MODEL_PATH, './'),
      );
      fs.copyFileSync(
        path.resolve(__dirname, `../templates/src/system/ts/mongoManager.ts`),
        path.resolve(SYSTEM_PATH, './mongoManager.ts'),
      );
      break;
    case 'mysql':
      commonName = '-mysql';
      break;
  }

  fs.copyFileSync(
    path.resolve(
      __dirname,
      `../templates/src/package/ts-graphql-yoga-webpack/package${commonName}.json`,
    ),
    path.resolve(dir, './package.json'),
  );
  fs.copyFileSync(
    path.resolve(
      __dirname,
      `../templates/src/config/ts-graphql-yoga/config${commonName}.ts`,
    ),
    path.resolve(SRC_DIR, './config/config.ts'),
  );
  fs.copyFileSync(
    path.resolve(__dirname, `../templates/src/app/ts-graphql/yoga/app.ts`),
    path.resolve(SRC_DIR, './app.ts'),
  );
  fs.copyFileSync(
    path.resolve(
      __dirname,
      `../templates/src/app/ts-graphql/yoga/main${commonName}.ts`,
    ),
    path.resolve(SRC_DIR, './main.ts'),
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

async function graphqlExpressTs(dir, options) {
  const SRC_DIR = path.resolve(dir, './src');
  const MIDDLEWARE_PATH = path.resolve(dir, './src/middleware');
  const MODULE_PATH = path.resolve(dir, './src/module');
  const MODEL_PATH = path.resolve(dir, './src/model');
  const SYSTEM_PATH = path.resolve(dir, './src/system');
  let commonName = '-normal';
  switch (options.db) {
    case 'none':
      commonName = '-normal';
      break;
    case 'mongodb':
      commonName = '-mongo';
      await ncp(
        path.resolve(__dirname, '../templates/src/model/ts/mongo/'),
        path.resolve(MODEL_PATH, './'),
      );
      fs.copyFileSync(
        path.resolve(__dirname, `../templates/src/system/ts/mongoManager.ts`),
        path.resolve(SYSTEM_PATH, './mongoManager.ts'),
      );
      break;
    case 'mysql':
      commonName = '-mysql';
      break;
  }
  fs.copyFileSync(
    path.resolve(
      __dirname,
      `../templates/src/package/ts-graphql-express/package${commonName}.json`,
    ),
    path.resolve(dir, './package.json'),
  );
  fs.copyFileSync(
    path.resolve(
      __dirname,
      `../templates/src/config/ts-graphql-yoga/config${commonName}.ts`,
    ),
    path.resolve(SRC_DIR, './config/config.ts'),
  );
  fs.copyFileSync(
    path.resolve(__dirname, `../templates/src/app/ts-graphql/express/app.ts`),
    path.resolve(SRC_DIR, './app.ts'),
  );
  fs.copyFileSync(
    path.resolve(
      __dirname,
      `../templates/src/app/ts-graphql/express/main${commonName}.ts`,
    ),
    path.resolve(SRC_DIR, './main.ts'),
  );
  await ncp(
    path.resolve(__dirname, '../templates/src/middleware/ts/graphql-express/'),
    path.resolve(MIDDLEWARE_PATH, './'),
  );
  await ncp(
    path.resolve(__dirname, '../templates/src/module/ts-graphql/module/'),
    path.resolve(MODULE_PATH, './'),
  );
}

async function graphqlKoaTs(dir, options) {
  const SRC_DIR = path.resolve(dir, './src');
  const MODULE_PATH = path.resolve(dir, './src/module');
  const MODEL_PATH = path.resolve(dir, './src/model');
  const SYSTEM_PATH = path.resolve(dir, './src/system');
  let commonName = '-normal';
  switch (options.db) {
    case 'none':
      commonName = '-normal';
      break;
    case 'mongodb':
      commonName = '-mongo';
      await ncp(
        path.resolve(__dirname, '../templates/src/model/ts/mongo/'),
        path.resolve(MODEL_PATH, './'),
      );
      fs.copyFileSync(
        path.resolve(__dirname, `../templates/src/system/ts/mongoManager.ts`),
        path.resolve(SYSTEM_PATH, './mongoManager.ts'),
      );
      break;
    case 'mysql':
      commonName = '-mysql';
      break;
  }
  fs.copyFileSync(
    path.resolve(
      __dirname,
      `../templates/src/package/ts-graphql-koa/package${commonName}.json`,
    ),
    path.resolve(dir, './package.json'),
  );
  fs.copyFileSync(
    path.resolve(
      __dirname,
      `../templates/src/config/ts-graphql-yoga/config${commonName}.ts`,
    ),
    path.resolve(SRC_DIR, './config/config.ts'),
  );
  fs.copyFileSync(
    path.resolve(__dirname, `../templates/src/app/ts-graphql/koa/app.ts`),
    path.resolve(SRC_DIR, './app.ts'),
  );
  fs.copyFileSync(
    path.resolve(
      __dirname,
      `../templates/src/app/ts-graphql/koa/main${commonName}.ts`,
    ),
    path.resolve(SRC_DIR, './main.ts'),
  );
  await ncp(
    path.resolve(__dirname, '../templates/src/module/ts-graphql/module/'),
    path.resolve(MODULE_PATH, './'),
  );
}
