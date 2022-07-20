const middleware1 = ({ request }: any, next: any) => {
    if (request.user) {
        return "first middle";
    } else {
        next();
    }
}

const middleware2 = ({ request }: any, next: any) => {
    if (request.user) {
        return "second middle";
    } else {
        next();
    }
}

const testMiddlewares = [middleware1, middleware2];

export default testMiddlewares;