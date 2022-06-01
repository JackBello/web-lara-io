import { FundationProvider } from 'https://raw.githubusercontent.com/JackBello/lara-io/master/framework/modules/providers.ts';
import { ApplicationConfig } from 'https://raw.githubusercontent.com/JackBello/lara-io/master/framework/modules/types.ts';
import { env } from 'https://raw.githubusercontent.com/JackBello/lara-io/master/framework/modules/helpers.ts';

import RoutesProvider from '../app/providers/routes.provider.ts';
import TemplatesProvider from '../app/providers/templates.provider.ts'

export default (): ApplicationConfig => ({
    name: env('APP_NAME', 'lara-io'),

    app: {
        http: "src/app/http",
    },

    paths: {
        app: "src/app",
        configs: "src/configs",
        statics: "src/public",
        resources: "src/resources",
        router: "src/router",
        storage: "src/storage",
        database: "src/database",
        ecosystems: "src/ecosystems",
        packages: "src/packages",
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