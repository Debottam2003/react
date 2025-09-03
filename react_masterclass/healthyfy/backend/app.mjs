import express from 'express';
import cors from 'cors';
import pool from './db.mjs';
import router from './routes/routes.mjs';
import cookieParser from 'cookie-parser';
import dotenv from "dotenv";
import { fileURLToPath } from "bun";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();

// app.use(cors({
//     origin: ["https://healthyfy-lzod.vercel.app", "http://localhost:5173"],
//     credentials: true
// }));

const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile("index.html");
});

app.use("/healthyfy", router);

async function main() { // entry point of the application
    try {
        let { rows } = await pool.query("select name, cuisine, recipe, imageurl from recipes limit 20");
        app.listen(PORT, () => {
            console.log('Server is listening and serving on port ', PORT);
        });
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
}
main();