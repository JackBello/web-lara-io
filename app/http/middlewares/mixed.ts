import { Use } from '@lara-io/core';

export function test2({ request }: any, next: any, [role]: any) {
    console.log(role);
    
    if (request().user) {
        return "middleware in function call by kernel";
    } else {
        next();
    }
}
export class Test3 {
    public handle(@Use("http/request") request: any, next: any) {
        console.log(request);
        
        if (!request.user) {
            return "middleware in class call by kernel";
        } else {
            next();
        }
    }
}