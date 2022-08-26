import { HttpKernel } from '@lara-io/core';
import redirectToWWW from './middlewares/redirect.middleware.ts';

export default class Kernel extends HttpKernel {
    protected routeMiddleware = {

    }

    protected middlewareGroups = {
        "web": [],
        "api": [],
        "graphql": []
    }

    protected middleware = [
        ...super.middleware,
        redirectToWWW
    ]
}
