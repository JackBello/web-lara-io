import { Application } from '@lara-io/core';

import AppConfig from '../configs/app.config.ts';
import ServerConfig from '../configs/server.config.ts';
import RouterConfig from '../configs/router.config.ts';
import StorageConfig from '../configs/storage.config.ts';

import Handler from './exceptions/handler.ts';
import Kernel from './http/kernel.ts';

const application = new Application(AppConfig().name);

application.registerConfig("app", AppConfig);
application.registerConfig("server", ServerConfig);
application.registerConfig("router", RouterConfig);
application.registerConfig("storage", StorageConfig);

application.singletonInstance("@handler", Handler);
application.singletonInstance("@kernel", Kernel);

await application.boot();

export default application;
