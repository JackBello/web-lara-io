import { RouterConfig } from 'https://raw.githubusercontent.com/JackBello/lara-io/master/framework/modules/types.ts';

export default (): RouterConfig => ({
    strict: true,
    indexes: true,

    files: [
        {
            path: "src/routes/web/index.ts",
        },
        {
            path: "src/routes/api/index.ts",
            subdomain: "api"
        }
    ]
});