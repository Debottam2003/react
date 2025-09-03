import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";

const app = express();
app.use(cors());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "dist")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.post("/login", express.json(), (req, res) => {
    return res.status(200).json({ message: "Login is Successful." });
});

// rest of all api routes

app.use((req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(5173, () => {
    console.log("Server is listening and running on port: 5173");
});