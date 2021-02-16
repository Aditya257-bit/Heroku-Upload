const fs = require("fs");
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/student/studentsList", (req, res) => {
    fs.readFile("Data.json", (err, data) => {
        if (err) throw err;

        res.status(200).send(data);
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});