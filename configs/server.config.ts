import { ServerConfig } from '@lara-io/types';
import { env } from '@lara-io/helpers';

export default (): ServerConfig => ({
    hostname: env('SERVER_NAME', 'localhost'),
    port: env('SERVER_PORT', 8000),
    transport: env('SERVER_TRANSPORT', 'tcp'),
});