import { env } from '@lara-io/helpers';

export default () => ({
    start: env("DB_CONNECTION", "mysql"),

    connections: {
        mysql: {
            driver: 'mysql',
            hostname: env('DB_HOST', '127.0.0.1'),
            port: env('DB_PORT', '3306'),
            username: env('DB_USERNAME', 'forge'),
            password: env('DB_PASSWORD', ''),
            database: env('DB_DATABASE', 'forge'),
            unix_socket: env('DB_SOCKET', ''),
            charset: 'utf8mb4',
            collation: 'utf8mb4_unicode_ci',
            prefix: '',
            prefix_indexes: true,
            strict: false,
            engine: env('DB_ENGINE', 'InnoDB'),
        },

        sqlite: {

        },

        postgres: {

        },

        moongo: {

        },

        maria: {

        },

        redis: {

        }
    }
});
