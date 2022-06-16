import { RouterConfig } from '@lara-io/types';

export default (): RouterConfig => ({
    strict: true,
    indexes: true,

    files: [
        {
            path: "routes/web/index.ts",
        },
        {
            path: "routes/api/index.ts",
            prefix: "api"
        }
    ]
});