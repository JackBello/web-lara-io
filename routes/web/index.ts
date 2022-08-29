import { Route } from '@lara-io/fecades';

import HomeController from '../../app/http/controllers/home.controller.ts';

import { publicPath, view, template, abort } from '@lara-io/helpers';

import testMiddlewares from '../../app/http/middlewares/test.ts';
import Test1 from '../../app/http/middlewares/test1.ts';

Route.get("/atom", "test", () => {
    template().share({
        minecraft: "https://minecraft.net/en-us/download/server/",
    });

    return view("test", { data: "Welcome", name: "Deno", history: "papa" });
}, ({ request }, next) => {
    if (request().user) {
        return view("404");
    } else {
        next();
    }
});

await Route.view("/atom2", "home.ts");
// await Route.view("/atom2", "home.ts");

Route.get("/middleware", "test.middleware", () => {
    return "<h1>Hello</h1>";
}, testMiddlewares);

Route.get("/contact", "contact", () => {
    return "contact";
});

Route.get("/download", "download", ({ response }) => {
    return response().download(publicPath("images/101854.jpg"));
});

Route.redirect("/my-user", "/user");

Route.prefix("user").group(() => {
    Route.get("/", "user.index", () => {
        return "user";
    });

    Route.get("/contact", "user.contact", () => {
        return "user contact";
    });

    Route.get("/file", "user.file", async ({ response }) => {
        return await response().file(publicPath("images/101854.jpg"));
    });

    Route.get("/:id?/:type?", "user.id", ({ request }) => {
        const { id, type } = request().params;
        
        if (type) {
            return `user ${id} ${type}`;
        }
        return "user id: " + id;
    });
});

Route.get("/cars", "cars", ({ config, view }) => {
    const paths = config("paths");

    console.log(paths);

    return view("404");
});

Route.get("/about", "about", ({ response }) => {
    response().header("server-ip", "127.0.0.0");

    return "about";
}, Test1);

Route.get("/map", "map", () => {
    abort(403);

    return "about";
});

Route.get("/json", "json", ({ response }) => {
    return response().json({
        is: true
    });
}, ["test-2:admin", "test-3"]);

Route.get("/json-test", "json.test", ({ response }) => {
    console.log(new Date());

    return response().json({
        a: 1
    });
});

Route.get("/{date}-{location}", "test-mixed-params", ({ request }) => {
    const { date, location } = request().params;

    return "mixed " + date + " " + location
});

Route.get("/(aboutme|informacion)", "test-mixed", () => {
    return "mixed"
});

Route.proxy("/youtube", "https://www.youtube.com", 443);
Route.proxy("/google", "https://www.google.com", 443);
Route.proxy("/github", "https://github.com/asos-craigmorten/opine-http-proxy", 443);
Route.proxy("/empleados", "http://localhost:3000/empleados", 3000);

Route.get("/:index", "index", [HomeController, "index"]);
Route.post("/", "store", [HomeController, "store"]);
// Route.put("/", "update", [HomeController, "update"]);
// Route.delete("/", "delete", [HomeController, "delete"]);
