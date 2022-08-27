import type { TRouteContext } from '@lara-io/types';

const redirectToWWW = ({ request }: TRouteContext, next: any) => {
    const { baseUrl } = request();

    if (!baseUrl.includes("www")) {
        return Response.redirect("www.lara-io.com", 302)
    }

    next();
}

export default redirectToWWW;
