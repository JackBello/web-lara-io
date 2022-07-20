
const ApiCORS = ({ response }: any, next: any) => {
    response().header("Access-Control-Allow-Origin", "http://localhost")
    response().header("Access-Control-Allow-Methods", "GET, PATH, POST, PUT, DELETE, OPTIONS")
    response().header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept, Authorization");
    next();
}

export default ApiCORS;
