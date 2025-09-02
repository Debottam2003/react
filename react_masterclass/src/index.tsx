import { serve } from "bun";
import index from "./index.html";

const server = serve({
  port: 5173,
  routes: {
    // Serve index.html for all unmatched routes.
    "/*": index,

    "/login": {
      async GET(req) {
        return Response.json({
          message: "Hello, world!",
          method: "GET",
        });
      },
      async POST(req) {
        // let userData = await req.json();
        // console.log(userData);
        return Response.json({
          message: "Login successful",
        });
      },
    },

    "/api/hello/:name": async (req) => {
      const name = req.params.name;
      return Response.json({
        message: `Hello, ${name}!`,
      });
    },
  },

  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
