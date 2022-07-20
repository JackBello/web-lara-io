import { HttpKernel } from '@lara-io/core';

import { Test3, test2 } from './middlewares/mixed.ts';

import ApiCORS from './middlewares/apicors.middleware.ts';

export default class Kernel extends HttpKernel {
    protected routeMiddleware = {
        "test-2": test2,
        "test-3": Test3,
        "api-cors": ApiCORS
    }

    protected middlewareGroups = {
        "web": [],
        "api": [],
        "graphql": []
    }
}