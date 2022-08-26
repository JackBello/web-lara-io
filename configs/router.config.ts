import { RouterConfig } from '@lara-io/types';
import { env } from '@lara-io/helpers';

import { indexApi } from '../routes/api/index.ts'
import { indexWebHome } from '../routes/web/index.ts'

export default (): RouterConfig => ({
    strict: true,
    indexes: true,

    routes: [
        {
            uri: "/",
            method: "GET",
            name: "home",
            action: indexWebHome,
            domain: `www.${env("SERVER_NAME", "lara-io")}`,
            group: [
                {
                    uri: "/api/",
                    method: "GET",
                    name: "api.index",
                    action: indexApi,
                },
            ]
        }
    ]
});
