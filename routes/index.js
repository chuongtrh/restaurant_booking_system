

module.exports = function (app) {
    function beforeHandleAPI(req, res, next) {
        next();
    }

    function afterHandleAPI(err, req, res, next) {
        console.error(err);
        return res.status(500).send('Internal server error')
    }

    app.get('/ping', (req, res) => {
        return res.status(200).send('pong')
    })

    app.use('/api', beforeHandleAPI);


    app.use('/api', afterHandleAPI);
};
