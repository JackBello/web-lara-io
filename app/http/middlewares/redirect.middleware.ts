import type { TRouteContext } from '@lara-io/types';
import { env } from '@lara-io/helpers';

const redirectToWWW = ({ request }: TRouteContext, next: any) => {
    const { baseUrl } = request();

    if (!baseUrl.includes("www")) {
        const urlRedirect = env("APP_ENV", "local") === "local" ? "www.lara-io.com" : "https://www.lara-io.com";

        return Response.redirect(urlRedirect, 302)
    }

    next();
}

export default redirectToWWW;
