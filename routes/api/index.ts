import { Route } from '@lara-io/fecades';

import { publicPath } from '@lara-io/helpers';

Route.get("/", "apo", ({ response }) => {
    const data = {
        name: "Deno",
        version: Deno.version.deno,
        typescript: Deno.version.typescript,
        v8: Deno.version.v8,
    }

    return response().json(data);
}, "api-cors");

Route.post("/upload", "upload", ({ request }) => {
    const { video } = request().files;
    
    const path = publicPath("videos/");

    console.log(video.originalName);
    console.log(video.mimeType);

    video.move(path);

    // video.move(path, "test."+video.extension);

    // video.save(path);

    // video.saveAs(path, "test."+video.extension);

    return `success`;
});

Route.post("/json", "body.json", ({ response }) => {
    response().header("mama", "papa")

    return response().json([1,2,3]);
});