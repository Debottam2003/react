let fs = require('fs');
let express = require('express');
let cors = require('cors')
let app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));

app.post("/upload", (req, res) =>{
    console.log(req.body.image.slice(0, 50));
    const imageData = req.body.image.split(',')[1];
    const buffer = Buffer.from(imageData, 'base64');
    // Save the image to a file
    let filename = `uploads/img_${String(Date.now())}.png`;
    fs.writeFile(filename, buffer, (err) => {
      if (err) {
        return res.status(500).json({ message: "failed to Upload" });
      }
      res.json({ message: "Upload successful" });
    });
});

app.listen(5000, ()=>{
    console.log("The server is running on port 5000");
});

