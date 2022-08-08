import { ServerConfig } from '@lara-io/types';
import { env } from '@lara-io/helpers';

export default (): ServerConfig => ({
    hostname: env('SERVER_NAME', ''),
    port: env('SERVER_PORT', 80),
    transport: env('SERVER_TRANSPORT', 'tcp'),
});
