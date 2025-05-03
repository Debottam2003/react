import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser'
import pgObj from './pg_connect.js';

const app = express();
const port = 5000;

const corsOptions = {
    origin: 'http://localhost:5173', // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], // Specify allowed HTTP methods
    credentials: true, // Allow cookies if needed
  };
  
app.use(cors(corsOptions));
app.use(cookieParser());

app.get('/test', (req, res) => {
    res.send('Hello World');
});

app.get('/', async (req, res) => {
    try{
       let {rows} = await pgObj.query("SELECT * FROM card;");
       res.cookie('data', "rony", {
        sameSite: "none", // Required for cross-origin
        secure: true, // Required for cross-origin cookies
        partitioned: true, // Enables partitioning
        maxAge: 60 * 1000, // 1 minute
      });
       res.status(200).json(rows);
    
    }
    catch(e){
        console.log(e);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});