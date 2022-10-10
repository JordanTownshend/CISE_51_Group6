const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const path = require('path');
const uri = process.env.MONGODB_URI;

// routes
const submissions = require('./routes/api/submissions');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// use Routes
app.use('/api/submissions', submissions);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "frontend/build")))

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "frontend", "build"), "index.html")
    })
} else {
    app.get("/", (req, res) => {res.send("API is running")})
}
