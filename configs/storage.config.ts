// import { Storage } from "@lara-io/fecades";
import { storagePath, publicPath } from "@lara-io/helpers";
import { env } from "@lara-io/helpers";

export default () => ({
    disks: {
        local: {
            driver: "local",
            root: storagePath("app"),
        },

        public: {
            driver: "local",
            root: storagePath("app/public"),
            url: `${env("APP_URL", "http://localhost")}/storage/`,
        },

        works: {
            driver: "local",
            root: storagePath("app/public/works"),
        },
    },

    default: "local",

    /**
     * Symbolic Links
     */
    links: [
        {
            path_old: publicPath("storage"),
            path_new: storagePath("app/public"),
        },
    ],
});