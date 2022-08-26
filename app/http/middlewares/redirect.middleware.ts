const redirectToWWW = ({ request }: any, next: any) => {
    const { baseUrl } = request();

    if (!baseUrl.includes("www")) {
        return Response.redirect("https://www.lara-io.com", 302)
    }

    next();
}

export default redirectToWWW;
