const responser = require("../shared/responser");

module.exports = function (app) {
    function beforeHandleAPI(req, res, next) {
        next();
    }

    function afterHandleAPI(err, req, res, next) {
        console.error(err);
        return res.status(500).send('Internal server error')
    }

    app.use(function (req, res, next) {
        res.success = responser.success.bind(res);
        res.failure = responser.failure.bind(res);
        res.error = responser.error.bind(res);
        next();
    });

    app.get('/ping', (req, res) => {
        return res.status(200).send('pong')
    })

    app.use('/api', beforeHandleAPI);
    app.use("/api/restaurant", require("./restaurant"));
    app.use("/api/branch", require("./branch"));
    app.use("/api/openhour", require("./openhour"));
    app.use("/api/reservation", require("./reservation"));

    app.use('/api', afterHandleAPI);
};
