// import { serve } from "bun";
// import index from "./index.html";

// const server = serve({
//   port: 5173,
//   routes: {
//     // Serve index.html for all unmatched routes.
//     "/*": index,

//     "/login": {
//       async GET(req) {
//         return Response.json({
//           message: "Hello, world!",
//           method: "GET",
//         });
//       },
//       async POST(req) {
//         // let userData = await req.json();
//         // console.log(userData);
//         return Response.json({
//           message: "Login successful",
//         });
//       },
//     },

//     "/api/hello/:name": async (req) => {
//       const name = req.params.name;
//       return Response.json({
//         message: `Hello, ${name}!`,
//       });
//     },
//   },

//   development: process.env.NODE_ENV !== "production" && {
//     // Enable browser hot reloading in development
//     hmr: true,

//     // Echo console logs from the browser to the server
//     console: true,
//   },
// });

// console.log(`🚀 Server running at ${server.url}`);

// -> bun build ./frontend.tsx --outdir ./public
// bun build ./frontend.tsx --outdir ./public --minify

import express from "express";
import cors from "cors";
import { fileURLToPath } from "bun";
import path from "path";

const app = express();
app.use(cors());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/login", express.json(), (req, res) => {
  return res.status(200).json({ message: "Login is Successful." });
});

app.listen(5173, () => {
  console.log("Server is listening and running on port: 5173");
});
