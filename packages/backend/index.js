// Install Express
const express = require("express");
const app = express();
const PORT = 5000;

//Add routes
const routes = require("./routes/app.routes.js");

app.use("/", routes);

app.listen(PORT, () =>{
    console.log(`Backend running on http://localhost:${PORT}`);
});