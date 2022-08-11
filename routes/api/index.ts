// index route to api
import type { TRouteContext } from '@lara-io/types';

export const indexApi = ({ request } : TRouteContext) => {
    const { ip, method } = request();

    console.log(ip);
    console.log(method);

    const data = {
        name: "Deno",
        version: Deno.version.deno,
        typescript: Deno.version.typescript,
        v8: Deno.version.v8,
    }

    return data
}
