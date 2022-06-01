import { ServerConfig } from 'https://raw.githubusercontent.com/JackBello/lara-io/master/framework/modules/types.ts';
import { env } from 'https://raw.githubusercontent.com/JackBello/lara-io/master/framework/modules/helpers.ts';

export default (): ServerConfig => ({
    hostname: env('SERVER_NAME', 'localhost'),
    port: env('SERVER_PORT', 3000),
    transport: env('SERVER_TRANSPORT', 'tcp'),
});