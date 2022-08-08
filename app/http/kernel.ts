import { HttpKernel } from '@lara-io/core';

export default class Kernel extends HttpKernel {
    protected routeMiddleware = {

    }

    protected middlewareGroups = {
        "web": [],
        "api": [],
        "graphql": []
    }
}
