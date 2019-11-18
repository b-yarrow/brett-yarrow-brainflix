// import express
const express = require("express");
var cors = require('cors');
const path = require("path");

//  initialize express for use
const app = express();

app.use(cors());

//  body parser
app.use(express.json());

app.use("/videos", require("./routes/api/videos"));

app.use("/upload", require("./routes/api/videos"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));