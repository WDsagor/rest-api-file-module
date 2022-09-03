const express = require('express');
const cors = require('cors');
const http= require("http")
const app = express();
const port = process.env.PORT || 5000;
const usersRoute = require ("./routes/users.route.js");
const dbConnect = require('./utils/dbConnection.js');
const server = http.createServer(app)
app.use(cors());
app.use(express.json());



app.use("/", usersRoute);
app.use("/user", usersRoute);

app.all("*", (req, res)=>{
res.send("route not foudE")
})
server.listen(port, () =>{
    console.log(`our Api server is runnin port ${port}`);
})

