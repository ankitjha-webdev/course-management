const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(express.json());

global.__basedir = __dirname + "/";

app.use(express.urlencoded({ extended: true }));

const db = require('./models');

db.sequalize.sync({ force: false })
    .then(() => {
        console.log("Synced db");
    })
    .catch((err) => {
        console.log(err);
    });

app.get('/', (req, res) => {
    res.status(200).json({ message: "Welcome to Credit Management System" })
});

require('./routes/student.routes')(app);
require('./routes/contact.routes')(app);
require('./routes/auth.routes')(app);

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});