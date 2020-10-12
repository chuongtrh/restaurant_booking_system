require('dotenv').config()

if (process.env.DEBUG_LOG == 0) {
    console.debug = function () { }
}

const express = require('express');

const compression = require("compression");
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
const { sequelize } = require("./models");

app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Load routes
require('./routes')(app);

let port = process.env.PORT || 4000;
app.listen(port, () => console.info(`App listening on port ${port}`));

process.on('SIGINT', function () {
    console.info('App close!');
    sequelize.close()
        .then(_ => {
            console.info('DB connection is closed');
            process.exit(0);
        });
});

process.on('uncaughtException', function (err) {
    if (err) {
        console.error('uncaughtException', err);
    }
});
