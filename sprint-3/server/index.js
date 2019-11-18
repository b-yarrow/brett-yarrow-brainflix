// import express
const express = require("express");
const path = require("path");

//  initialize express for use
const app = express();

//  body parser
app.use(express.json());

app.use("/videos", require("./routes/api/videos"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));