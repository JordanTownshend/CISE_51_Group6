const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const path = require('path');
const uri = process.env.MONGODB_URI;

// routess
const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// use Routes
const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "client/build")))

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build"), "index.html")
    })
} else {
    app.get("/", (req, res) => {res.send("API is running")})
}
