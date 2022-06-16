import { FundationProvider } from '@lara-io/providers';
import { ApplicationConfig } from '@lara-io/types';
import { env } from '@lara-io/helpers';

import RoutesProvider from '../app/providers/routes.provider.ts';
import TemplatesProvider from '../app/providers/templates.provider.ts'

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
            name: "fundation",
            instance: FundationProvider
        },
        {
            name: "routes",
            instance: RoutesProvider
        },
        {
            name: "templates",
            instance: TemplatesProvider
        }
    ],

    configs: [],

    isDebug: env('APP_DEBUG', false),
});