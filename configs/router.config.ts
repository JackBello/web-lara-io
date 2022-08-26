import { RouterConfig } from '@lara-io/types';

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
            domain: "www",
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
