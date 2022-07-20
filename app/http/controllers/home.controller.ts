import BaseController from './controller.ts';

import { Inject, Request, Response } from '@lara-io/core';

import type { THttpRequest, THttpResponse, TStorage } from '@lara-io/types';

export default class HomeController extends BaseController {
    @Inject("storage") private storage!: TStorage;
    @Request() private request!: THttpRequest;
    @Response() private response!: THttpResponse;

    constructor() {
        super();

        this.middleware("test-2").only(["update"]);
    }

    public index(index: number) {
        console.log(index);

        return "index controller";
    }

    public store() {
        return "store controller";
    }

    public update() {
        return "update controller"
    }

    public delete() {
        return "delete controller"
    }
}