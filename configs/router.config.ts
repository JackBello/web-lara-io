import { RouterConfig } from '@lara-io/types';

import { indexApi } from '../routes/api/index.ts'
import { indexWebHome } from '../routes/web/index.ts'

export default (): RouterConfig => ({
    strict: true,
    indexes: true,

    routes: [
        {
            uri: "/api/",
            action: indexApi,
            method: "GET",
            name: "api.index",
        },
        {
            uri: "/",
            method: "GET",
            name: "home",
            action: indexWebHome
        }
    ]
});
