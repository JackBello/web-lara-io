import { Route } from '@lara-io/fecades';

import HomeController from '../../app/http/controllers/home.controller.ts';

import { readableStreamFromReader } from 'https://deno.land/std@0.141.0/streams/mod.ts';

import { publicPath, view, template } from '@lara-io/helpers';

Route.get("/atom", "test", () => {
    template().share({
        minecraft: "https://minecraft.net/en-us/download/server/",
    });

    return view("test", { data: "Welcome", name: "Deno", history: "papa" });
}, ({ request }, next) => {
    if (request.user) {
        return view("404");
    } else {
        next();
    }
});

await Route.view("/atom2", "home.ts");

Route.get("/middleware", "test.middleware", () => {
    return "<h1>Hello</h1>";
}, ({ request }, next) => {
    if (request.user) {
        return view("404");
    } else {
        next();
    }
});

Route.get("/contact", "contact", () => {
    return "contact";
});

Route.get("/download", "download", () => {
    let file: Deno.FsFile;

    try {
        file = Deno.openSync(publicPath("images/101854.jpg"), { read: true });

        return new Response(readableStreamFromReader(file), { 
            headers: { 
                "content-type": "image/jpeg",
                "content-disposition": "attachment; filename=101854.jpg"
            },
            status: 200 });
    } catch (error) {
        console.log(error);
        return new Response("File not found", { status: 404 });
    }

});

Route.redirect("/my-user", "/user");

Route.prefix("user").group(() => {
    Route.get("", "user.index", () => {
        return "user";
    });

    Route.get("/{id?}/{type?}", "user.id", (context, id: number, type: string) => {
        console.log(context);
        
        if (type) {
            return `user ${id} ${type}`;
        }
        return "user id: " + id;
    });

    Route.get("/contact", "user.contact", () => {
        return "user contact";
    });
});

Route.get("/cars", "cars", ({ config, view }) => {
    const paths = config("paths");

    console.log(paths);

    return view("404");
});

Route.get("/about", "about", () => {
    return "about";
});

Route.get("/map", "map", () => {
    return "about";
});

Route.get("/json", "json", () => {
    return true
});

Route.get("/json-test", "json.test", () => {
console.log(1);

    return true
});

Route.get("/{*}", "index", [HomeController, "index"]);