import { Provider } from 'https://raw.githubusercontent.com/JackBello/lara-io/master/framework/modules/core.ts';

import { getBasePath } from 'https://raw.githubusercontent.com/JackBello/lara-io/master/framework/modules/helpers.ts';

import { Route } from 'https://raw.githubusercontent.com/JackBello/lara-io/master/framework/modules/fecades.ts';

export default class RoutesProvider extends Provider {
    protected async boot() {
        const $router = this.app.service('router');

        const { files, strict } = this.app.config('router');
        const { hostname } = this.app.config('server');

        $router.setStrict(strict);

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
    }
}