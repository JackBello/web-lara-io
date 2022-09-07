// index route to api
import type { TRouteContext } from '@lara-io/types';

export const indexApi = ({ request } : TRouteContext) => {
    const { ip, method, baseUri } = request();

    console.log(ip);

    const data = {
        name: "Deno",
        version: Deno.version?.deno,
        typescript: Deno.version?.typescript,
        v8: Deno.version?.v8,
        connection: {
            ip,
            method,
            baseUri
        }
    }

    data;

    return Response.redirect("https://mega.nz/folder/PDREQKCJ#Z75x5lWkQIyYfC2lUezd9A")
}
