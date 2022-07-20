import { RouterConfig } from '@lara-io/types';

export default (): RouterConfig => ({
    strict: true,
    indexes: true,

    files: [
        {
            path: "routes/web/index.ts",
        },
        {
            path: "routes/api/index.ts",
            prefix: "api"
        }
    ],

    // routes: [
    //     {
    //         uri: "/",
    //         name: "index",
    //         method: "GET",
    //         action() {
    //             return "Hello World";
    //         },
    //     },
    //     {
    //         uri: "/api",
    //         name: "api",
    //         method: "GET",
    //         action() {
    //             return {
    //                 message: "Hello World",
    //             };
    //         },
    //         group: [
    //             {
    //                 uri: "/users",
    //                 name: "users",
    //                 method: "GET",
    //                 action() {
    //                     return [
    //                         {
    //                             id: 1,
    //                             name: "John Doe",
    //                         },
    //                         {
    //                             id: 2,
    //                             name: "Jane Doe",
    //                         },
    //                     ]
    //                 },
    //                 group: [
    //                     {
    //                         uri: "/{id}",
    //                         name: "user",
    //                         method: "GET",
    //                         action({ request }: any) {
    //                             const { id } = request.params;

    //                             return {
    //                                 id,
    //                                 name: "John Doe",
    //                             };
    //                         }
    //                     }
    //                 ]
    //             },
    //         ]
    //     }
    // ]
});