// deno-lint-ignore-file no-explicit-any
import { Provider } from '@lara-io/core';

import { getBasePath } from '@lara-io/helpers';

import { Route } from '@lara-io/fecades';

export default class RoutesProvider extends Provider {
    protected async boot() {
        const $router = this.app.service('router');

        const { files, strict, routes } = this.app.config('router');
        const { hostname } = this.app.config('server');

        $router.setStrict(strict);

        if (files) {
            for(const file of files) {
                const path = getBasePath(file.path);

                if(file.subdomain && file.prefix) {
                    await Route.domain(`${file.subdomain}.${hostname}`).prefix(file.prefix).group(path);
                } else if(file.subdomain && !file.prefix) {
                    await Route.domain(`${file.subdomain}.${hostname}`).group(path);
                } else if(!file.subdomain && file.prefix) {
                    await Route.prefix(file.prefix).group(path);
                } else {
                    await Route.group(path);
                }
            }
        } else if (routes) {
            const registerGroup = (route:any, path:string) => {
                $router.registerRoute({
                    uri: `${path}${route.uri}`,
                    name: route.name,
                    regexp: route.regexp,
                    method: route.method,
                    redirect: route.redirect,
                    middleware: route.middleware,
                }, route.action);

                if (route.group) {
                    const base = `${path}${route.uri}`;

                    route.group.forEach((route:any) => {
                        registerGroup(route, base);
                    });
                }
            };

            for (const route of routes) {
                $router.registerRoute({
                    uri: route.uri,
                    name: route.name,
                    regexp: route.regexp,
                    method: route.method,
                    redirect: route.redirect,
                    middleware: route.middleware,
                }, route.action);

                if (route.group) {
                    const base = route.uri;

                    route.group.forEach((route:any) => {
                        registerGroup(route, base);
                    });
                }
            }
        }

        console.log(Deno.cwd());
        console.log(hostname);
        console.log($router.routes);

        console.log(import.meta.url);

        for (const name in Deno.readDir(Deno.cwd())) {
            console.log(name);
        }
    }
}
