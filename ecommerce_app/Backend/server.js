const express = require('express');
const cors = require('cors');
const router = require("./Router/Route");

const port = 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api', router);

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});