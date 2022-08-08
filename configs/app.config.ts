import { FoundationProvider } from '@lara-io/providers';
import { ApplicationConfig } from '@lara-io/types';
import { env } from '@lara-io/helpers';

import RoutesProvider from '../app/providers/routes.provider.ts';

export default (): ApplicationConfig => ({
    name: env('APP_NAME', 'lara-io'),

    app: {
        http: "app/http",
    },

    paths: {
        app: "app",
        configs: "configs",
        statics: "public",
        resources: "resources",
        router: "router",
        storage: "storage",
        database: "database",
        ecosystems: "ecosystems",
        packages: "packages",
    },

    services: [],

    providers: [
        {
            name: "foundation",
            instance: FoundationProvider
        },
        {
            name: "routes",
            instance: RoutesProvider
        }
    ],

    configs: [],

    // isDebug: env('APP_DEBUG', false),
    isDebug: true,
});
