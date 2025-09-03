import express from 'express';
// import cors from 'cors';
import cookieParser from 'cookie-parser'
import pgObj from './pg_connect.js';
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 4000;

// const corsOptions = {
//     origin: 'http://localhost:5173', // Allow requests from this origin
//     methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], // Specify allowed HTTP methods
//     credentials: true, // Allow cookies if needed
//   };

// app.use(cors(corsOptions));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "dist")));

// app.use(express.static(path.join(__dirname, "dist")));

// Express serves all files inside dist.
// That means:

// http://localhost:4000/ → will serve dist/index.html by default.

// http://localhost:4000/style.css → will serve dist/assets/index.css.

// http://localhost:4000/main.js → will serve dist/assets/index.js.

// When you run a web app, your CSS, JavaScript, and static assets are always public.
// The browser needs them to render your frontend, so anyone can “view source” or open DevTools and see them.

// This is normal for all websites:

// Any CSS file you serve → visible.

// Any JS file you serve → visible(can even be prettified in DevTools).

// Any images / fonts → visible.

// 🔒 The important thing is what you put inside those files:

// Don’t hardcode secrets(API keys, database passwords, private tokens) in your frontend code.

// If you need to protect sensitive data, keep it in the backend and expose only what’s safe via API routes.

// Use environment variables(process.env...) on the backend, and if you need a public 
// API key(like for a 3rd - party service), make sure it’s intended to be public.

app.get("/", (req, res) => {
    return res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.get('/test', (req, res) => {
    res.send('Hello World');
});

app.get('/cardapi', async (req, res) => {
    try {
        let { rows } = await pgObj.query("SELECT * FROM card;");
        res.cookie('data', "rony", {
            sameSite: "none", // Required for cross-origin
            secure: true, // Required for cross-origin cookies
            partitioned: true, // Enables partitioning
            maxAge: 60 * 1000, // 1 minute
        });
        return res.status(200).json(rows);
    }
    catch (e) {
        console.log(e.message);
        return res.status(500).json({ message: "Internal server error" });
    }
});

app.use((req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});