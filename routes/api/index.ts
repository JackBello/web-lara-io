import { Route } from '@lara-io/fecades';

Route.get("/", "api.index", () => {
    const data = {
        name: "Deno",
        version: Deno.version.deno,
        typescript: Deno.version.typescript,
        v8: Deno.version.v8,
    }

    return data
});