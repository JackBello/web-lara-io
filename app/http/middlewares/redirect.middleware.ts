import type { TRouteContext } from '@lara-io/types';

const redirectToWWW = ({ request }: TRouteContext, next: any) => {
    const { baseUrl } = request();

    if (!baseUrl.includes("www")) {
        const { hostname, protocol, port } = new URLPattern(baseUrl);

        const urlRedirect = `${protocol}://www.${hostname}${port ? `:${port}` : ""}`;

        console.log(urlRedirect);

        // return Response.redirect(urlRedirect, 302)
    }

    next();
}

export default redirectToWWW;
