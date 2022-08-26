const redirectToWWW = ({ request }: any, next: any) => {
    const { baseUrl, route } = request();

    if (!baseUrl.includes("www")) {
        console.log(baseUrl);
        console.log(route);

        // return Response.redirect("https://www.lara-io.com", 302)
    }

    next();
}

export default redirectToWWW;
