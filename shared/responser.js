class Responser {
    static success(message, responseData = null) {
        if (responseData) {
            this.status(200).send({
                status: 'SUCCESS',
                message: message || '',
                ...responseData
            });
        } else {
            this.status(200).send({
                status: 'SUCCESS',
                message: message || ''
            });
        }
    }

    static error(error) {
        this.status(500).send({
            status: 'ERROR',
            message: String(error)
        });
    }

    static failure(message, status) {
        this.status(400).send({
            status: status || 'FAILED',
            message: message || ''
        });
    }
}

module.exports = Responser;
