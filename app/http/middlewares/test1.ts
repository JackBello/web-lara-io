export default class Test1 {
    public handle(context: any, next: any) {
        const { request } = context;

        if (request().user) {
            return "middleware in class";
        } else {
            next();
        }
    }
}